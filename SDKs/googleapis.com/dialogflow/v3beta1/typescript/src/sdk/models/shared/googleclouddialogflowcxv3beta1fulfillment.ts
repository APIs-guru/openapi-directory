import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3beta1ResponseMessage } from "./googleclouddialogflowcxv3beta1responsemessage";
import { GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction } from "./googleclouddialogflowcxv3beta1fulfillmentsetparameteraction";


// GoogleCloudDialogflowCxV3beta1Fulfillment
/** 
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
**/
export class GoogleCloudDialogflowCxV3beta1Fulfillment extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditionalCases", elemType: shared.GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases })
  conditionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases[];

  @Metadata({ data: "json, name=messages", elemType: shared.GoogleCloudDialogflowCxV3beta1ResponseMessage })
  messages?: GoogleCloudDialogflowCxV3beta1ResponseMessage[];

  @Metadata({ data: "json, name=returnPartialResponses" })
  returnPartialResponses?: boolean;

  @Metadata({ data: "json, name=setParameterActions", elemType: shared.GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction })
  setParameterActions?: GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction[];

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=webhook" })
  webhook?: string;
}
