import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents
/** 
 * Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons.
**/
export class GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delayedDeviceDoze" })
  delayedDeviceDoze?: number;

  @SpeakeasyMetadata({ data: "json, name=delayedDeviceOffline" })
  delayedDeviceOffline?: number;

  @SpeakeasyMetadata({ data: "json, name=delayedMessageThrottled" })
  delayedMessageThrottled?: number;

  @SpeakeasyMetadata({ data: "json, name=delayedUserStopped" })
  delayedUserStopped?: number;

  @SpeakeasyMetadata({ data: "json, name=deliveredNoDelay" })
  deliveredNoDelay?: number;
}
