import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportStateAndNotificationResponse
/** 
 * Response type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call.
**/
export class ReportStateAndNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
