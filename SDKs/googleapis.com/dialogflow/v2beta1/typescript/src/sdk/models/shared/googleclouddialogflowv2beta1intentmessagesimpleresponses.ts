import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse } from "./googleclouddialogflowv2beta1intentmessagesimpleresponse";



// GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses
/** 
 * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=simpleResponses", elemType: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse })
  simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse[];
}
