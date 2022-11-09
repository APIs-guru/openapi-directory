import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse } from "./googleclouddialogflowv2beta1intentmessagesimpleresponse";


// GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses
/** 
 * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses extends SpeakeasyBase {
  @Metadata({ data: "json, name=simpleResponses", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse })
  simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse[];
}
