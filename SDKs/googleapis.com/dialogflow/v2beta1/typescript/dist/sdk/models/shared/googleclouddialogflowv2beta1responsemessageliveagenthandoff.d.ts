import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates that the conversation should be handed off to a human agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry fulfillment of a CX Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human.
**/
export declare class GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff extends SpeakeasyBase {
    metadata?: Map<string, any>;
}
