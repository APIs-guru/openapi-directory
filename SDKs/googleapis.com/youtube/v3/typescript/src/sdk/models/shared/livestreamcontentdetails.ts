import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LiveStreamContentDetails
/** 
 * Detailed settings of a stream.
**/
export class LiveStreamContentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closedCaptionsIngestionUrl" })
  closedCaptionsIngestionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=isReusable" })
  isReusable?: boolean;
}
