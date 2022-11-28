import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageInput } from "./googleclouddialogflowcxv3beta1responsemessage";
import { GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction } from "./googleclouddialogflowcxv3beta1fulfillmentsetparameteraction";
import { GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases } from "./googleclouddialogflowcxv3beta1fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3beta1ResponseMessage } from "./googleclouddialogflowcxv3beta1responsemessage";
/**
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
**/
export declare class GoogleCloudDialogflowCxV3beta1FulfillmentInput extends SpeakeasyBase {
    conditionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput[];
    messages?: GoogleCloudDialogflowCxV3beta1ResponseMessageInput[];
    returnPartialResponses?: boolean;
    setParameterActions?: GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction[];
    tag?: string;
    webhook?: string;
}
/**
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
**/
export declare class GoogleCloudDialogflowCxV3beta1Fulfillment extends SpeakeasyBase {
    conditionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases[];
    messages?: GoogleCloudDialogflowCxV3beta1ResponseMessage[];
    returnPartialResponses?: boolean;
    setParameterActions?: GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction[];
    tag?: string;
    webhook?: string;
}
