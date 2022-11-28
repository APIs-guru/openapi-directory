import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageSimpleResponse } from "./googleclouddialogflowv2intentmessagesimpleresponse";



// GoogleCloudDialogflowV2IntentMessageSimpleResponses
/** 
 * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
**/
export class GoogleCloudDialogflowV2IntentMessageSimpleResponses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=simpleResponses", elemType: GoogleCloudDialogflowV2IntentMessageSimpleResponse })
  simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponse[];
}
