import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParallelInstruction } from "./parallelinstruction";



// MapTask
/** 
 * MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output.
**/
export class MapTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=counterPrefix" })
  counterPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=instructions", elemType: ParallelInstruction })
  instructions?: ParallelInstruction[];

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName?: string;

  @SpeakeasyMetadata({ data: "json, name=systemName" })
  systemName?: string;
}
