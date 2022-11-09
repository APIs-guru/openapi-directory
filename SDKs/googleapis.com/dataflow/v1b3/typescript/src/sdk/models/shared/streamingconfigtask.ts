import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StreamingComputationConfig } from "./streamingcomputationconfig";


// StreamingConfigTask
/** 
 * A task that carries configuration information for streaming computations.
**/
export class StreamingConfigTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitStreamChunkSizeBytes" })
  commitStreamChunkSizeBytes?: string;

  @Metadata({ data: "json, name=getDataStreamChunkSizeBytes" })
  getDataStreamChunkSizeBytes?: string;

  @Metadata({ data: "json, name=maxWorkItemCommitBytes" })
  maxWorkItemCommitBytes?: string;

  @Metadata({ data: "json, name=streamingComputationConfigs", elemType: shared.StreamingComputationConfig })
  streamingComputationConfigs?: StreamingComputationConfig[];

  @Metadata({ data: "json, name=userStepToStateFamilyNameMap" })
  userStepToStateFamilyNameMap?: Map<string, string>;

  @Metadata({ data: "json, name=windmillServiceEndpoint" })
  windmillServiceEndpoint?: string;

  @Metadata({ data: "json, name=windmillServicePort" })
  windmillServicePort?: string;
}
