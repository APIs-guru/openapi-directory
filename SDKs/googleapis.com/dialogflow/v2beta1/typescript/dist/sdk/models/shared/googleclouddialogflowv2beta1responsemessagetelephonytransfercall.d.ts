import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
**/
export declare class GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall extends SpeakeasyBase {
    phoneNumber?: string;
    sipUri?: string;
}
