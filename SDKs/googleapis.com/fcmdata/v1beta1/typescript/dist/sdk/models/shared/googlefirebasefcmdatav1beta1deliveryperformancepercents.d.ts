import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons.
**/
export declare class GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents extends SpeakeasyBase {
    delayedDeviceDoze?: number;
    delayedDeviceOffline?: number;
    delayedMessageThrottled?: number;
    delayedUserStopped?: number;
    deliveredNoDelay?: number;
}
