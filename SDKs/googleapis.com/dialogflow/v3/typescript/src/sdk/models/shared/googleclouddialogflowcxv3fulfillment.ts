import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCases } from "./googleclouddialogflowcxv3fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3ResponseMessage } from "./googleclouddialogflowcxv3responsemessage";
import { GoogleCloudDialogflowCxV3FulfillmentSetParameterAction } from "./googleclouddialogflowcxv3fulfillmentsetparameteraction";


// GoogleCloudDialogflowCxV3Fulfillment
/** 
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
**/
export class GoogleCloudDialogflowCxV3Fulfillment extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditionalCases", elemType: shared.GoogleCloudDialogflowCxV3FulfillmentConditionalCases })
  conditionalCases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCases[];

  @Metadata({ data: "json, name=messages", elemType: shared.GoogleCloudDialogflowCxV3ResponseMessage })
  messages?: GoogleCloudDialogflowCxV3ResponseMessage[];

  @Metadata({ data: "json, name=returnPartialResponses" })
  returnPartialResponses?: boolean;

  @Metadata({ data: "json, name=setParameterActions", elemType: shared.GoogleCloudDialogflowCxV3FulfillmentSetParameterAction })
  setParameterActions?: GoogleCloudDialogflowCxV3FulfillmentSetParameterAction[];

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=webhook" })
  webhook?: string;
}
