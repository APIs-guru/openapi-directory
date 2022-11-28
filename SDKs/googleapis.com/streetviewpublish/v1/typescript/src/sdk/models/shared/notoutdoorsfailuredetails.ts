import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotOutdoorsFailureDetails
/** 
 * Details related to ProcessingFailureReason#NOT_OUTDOORS. If there are multiple indoor frames found, the first frame is recorded here.
**/
export class NotOutdoorsFailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
