import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageInput } from "./googleclouddialogflowcxv3beta1responsemessage";
import { GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction } from "./googleclouddialogflowcxv3beta1fulfillmentsetparameteraction";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3beta1ResponseMessage } from "./googleclouddialogflowcxv3beta1responsemessage";



// GoogleCloudDialogflowCxV3beta1FulfillmentInput
/** 
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
**/
export class GoogleCloudDialogflowCxV3beta1FulfillmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditionalCases", elemType: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput })
  conditionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput[];

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowCxV3beta1ResponseMessageInput })
  messages?: GoogleCloudDialogflowCxV3beta1ResponseMessageInput[];

  @SpeakeasyMetadata({ data: "json, name=returnPartialResponses" })
  returnPartialResponses?: boolean;

  @SpeakeasyMetadata({ data: "json, name=setParameterActions", elemType: GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction })
  setParameterActions?: GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction[];

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}


// GoogleCloudDialogflowCxV3beta1Fulfillment
/** 
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
**/
export class GoogleCloudDialogflowCxV3beta1Fulfillment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditionalCases", elemType: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases })
  conditionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases[];

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowCxV3beta1ResponseMessage })
  messages?: GoogleCloudDialogflowCxV3beta1ResponseMessage[];

  @SpeakeasyMetadata({ data: "json, name=returnPartialResponses" })
  returnPartialResponses?: boolean;

  @SpeakeasyMetadata({ data: "json, name=setParameterActions", elemType: GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction })
  setParameterActions?: GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction[];

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}
