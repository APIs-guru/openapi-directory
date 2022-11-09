import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StreamingStageLocation
/** 
 * Identifies the location of a streaming computation stage, for stage-to-stage communication.
**/
export class StreamingStageLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=streamId" })
  streamId?: string;
}
