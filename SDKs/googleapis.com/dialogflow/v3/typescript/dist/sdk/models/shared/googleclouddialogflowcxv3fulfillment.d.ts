import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCases } from "./googleclouddialogflowcxv3fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3ResponseMessage } from "./googleclouddialogflowcxv3responsemessage";
import { GoogleCloudDialogflowCxV3FulfillmentSetParameterAction } from "./googleclouddialogflowcxv3fulfillmentsetparameteraction";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput } from "./googleclouddialogflowcxv3fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3ResponseMessageInput } from "./googleclouddialogflowcxv3responsemessage";
/**
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
**/
export declare class GoogleCloudDialogflowCxV3Fulfillment extends SpeakeasyBase {
    conditionalCases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCases[];
    messages?: GoogleCloudDialogflowCxV3ResponseMessage[];
    returnPartialResponses?: boolean;
    setParameterActions?: GoogleCloudDialogflowCxV3FulfillmentSetParameterAction[];
    tag?: string;
    webhook?: string;
}
/**
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
**/
export declare class GoogleCloudDialogflowCxV3FulfillmentInput extends SpeakeasyBase {
    conditionalCases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput[];
    messages?: GoogleCloudDialogflowCxV3ResponseMessageInput[];
    returnPartialResponses?: boolean;
    setParameterActions?: GoogleCloudDialogflowCxV3FulfillmentSetParameterAction[];
    tag?: string;
    webhook?: string;
}
