import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParallelInstruction } from "./parallelinstruction";


// StreamingComputationConfig
/** 
 * Configuration information for a single streaming computation.
**/
export class StreamingComputationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=computationId" })
  computationId?: string;

  @Metadata({ data: "json, name=instructions", elemType: shared.ParallelInstruction })
  instructions?: ParallelInstruction[];

  @Metadata({ data: "json, name=stageName" })
  stageName?: string;

  @Metadata({ data: "json, name=systemName" })
  systemName?: string;

  @Metadata({ data: "json, name=transformUserNameToStateFamily" })
  transformUserNameToStateFamily?: Map<string, string>;
}
