import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParallelInstruction } from "./parallelinstruction";



// StreamingComputationConfig
/** 
 * Configuration information for a single streaming computation.
**/
export class StreamingComputationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computationId" })
  computationId?: string;

  @SpeakeasyMetadata({ data: "json, name=instructions", elemType: ParallelInstruction })
  instructions?: ParallelInstruction[];

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName?: string;

  @SpeakeasyMetadata({ data: "json, name=systemName" })
  systemName?: string;

  @SpeakeasyMetadata({ data: "json, name=transformUserNameToStateFamily" })
  transformUserNameToStateFamily?: Map<string, string>;
}
