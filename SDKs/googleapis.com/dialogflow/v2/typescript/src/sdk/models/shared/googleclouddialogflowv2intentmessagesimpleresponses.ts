import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2IntentMessageSimpleResponse } from "./googleclouddialogflowv2intentmessagesimpleresponse";


// GoogleCloudDialogflowV2IntentMessageSimpleResponses
/** 
 * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
**/
export class GoogleCloudDialogflowV2IntentMessageSimpleResponses extends SpeakeasyBase {
  @Metadata({ data: "json, name=simpleResponses", elemType: shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse })
  simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponse[];
}
