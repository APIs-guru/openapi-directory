import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParallelInstruction } from "./parallelinstruction";


// MapTask
/** 
 * MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output.
**/
export class MapTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=counterPrefix" })
  counterPrefix?: string;

  @Metadata({ data: "json, name=instructions", elemType: shared.ParallelInstruction })
  instructions?: ParallelInstruction[];

  @Metadata({ data: "json, name=stageName" })
  stageName?: string;

  @Metadata({ data: "json, name=systemName" })
  systemName?: string;
}
