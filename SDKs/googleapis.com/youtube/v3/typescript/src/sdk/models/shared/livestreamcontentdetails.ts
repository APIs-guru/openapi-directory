import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LiveStreamContentDetails
/** 
 * Detailed settings of a stream.
**/
export class LiveStreamContentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=closedCaptionsIngestionUrl" })
  closedCaptionsIngestionUrl?: string;

  @Metadata({ data: "json, name=isReusable" })
  isReusable?: boolean;
}
