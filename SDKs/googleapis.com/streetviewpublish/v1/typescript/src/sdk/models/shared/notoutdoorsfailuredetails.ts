import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotOutdoorsFailureDetails
/** 
 * Details related to ProcessingFailureReason#NOT_OUTDOORS. If there are multiple indoor frames found, the first frame is recorded here.
**/
export class NotOutdoorsFailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
