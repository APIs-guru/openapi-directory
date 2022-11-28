import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCases } from "./googleclouddialogflowcxv3fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3ResponseMessage } from "./googleclouddialogflowcxv3responsemessage";
import { GoogleCloudDialogflowCxV3FulfillmentSetParameterAction } from "./googleclouddialogflowcxv3fulfillmentsetparameteraction";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput } from "./googleclouddialogflowcxv3fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3ResponseMessageInput } from "./googleclouddialogflowcxv3responsemessage";



// GoogleCloudDialogflowCxV3Fulfillment
/** 
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
**/
export class GoogleCloudDialogflowCxV3Fulfillment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditionalCases", elemType: GoogleCloudDialogflowCxV3FulfillmentConditionalCases })
  conditionalCases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCases[];

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowCxV3ResponseMessage })
  messages?: GoogleCloudDialogflowCxV3ResponseMessage[];

  @SpeakeasyMetadata({ data: "json, name=returnPartialResponses" })
  returnPartialResponses?: boolean;

  @SpeakeasyMetadata({ data: "json, name=setParameterActions", elemType: GoogleCloudDialogflowCxV3FulfillmentSetParameterAction })
  setParameterActions?: GoogleCloudDialogflowCxV3FulfillmentSetParameterAction[];

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}


// GoogleCloudDialogflowCxV3FulfillmentInput
/** 
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
**/
export class GoogleCloudDialogflowCxV3FulfillmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditionalCases", elemType: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput })
  conditionalCases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput[];

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowCxV3ResponseMessageInput })
  messages?: GoogleCloudDialogflowCxV3ResponseMessageInput[];

  @SpeakeasyMetadata({ data: "json, name=returnPartialResponses" })
  returnPartialResponses?: boolean;

  @SpeakeasyMetadata({ data: "json, name=setParameterActions", elemType: GoogleCloudDialogflowCxV3FulfillmentSetParameterAction })
  setParameterActions?: GoogleCloudDialogflowCxV3FulfillmentSetParameterAction[];

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}
