import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingComputationConfig } from "./streamingcomputationconfig";



// StreamingConfigTask
/** 
 * A task that carries configuration information for streaming computations.
**/
export class StreamingConfigTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitStreamChunkSizeBytes" })
  commitStreamChunkSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=getDataStreamChunkSizeBytes" })
  getDataStreamChunkSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=maxWorkItemCommitBytes" })
  maxWorkItemCommitBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=streamingComputationConfigs", elemType: StreamingComputationConfig })
  streamingComputationConfigs?: StreamingComputationConfig[];

  @SpeakeasyMetadata({ data: "json, name=userStepToStateFamilyNameMap" })
  userStepToStateFamilyNameMap?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=windmillServiceEndpoint" })
  windmillServiceEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=windmillServicePort" })
  windmillServicePort?: string;
}
