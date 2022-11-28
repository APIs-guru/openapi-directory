import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StreamingStageLocation
/** 
 * Identifies the location of a streaming computation stage, for stage-to-stage communication.
**/
export class StreamingStageLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=streamId" })
  streamId?: string;
}
