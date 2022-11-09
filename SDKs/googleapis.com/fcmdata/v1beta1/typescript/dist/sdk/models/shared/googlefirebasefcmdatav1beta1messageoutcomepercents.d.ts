import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes.
**/
export declare class GoogleFirebaseFcmDataV1beta1MessageOutcomePercents extends SpeakeasyBase {
    delivered?: number;
    droppedAppForceStopped?: number;
    droppedDeviceInactive?: number;
    droppedTooManyPendingMessages?: number;
    pending?: number;
}
