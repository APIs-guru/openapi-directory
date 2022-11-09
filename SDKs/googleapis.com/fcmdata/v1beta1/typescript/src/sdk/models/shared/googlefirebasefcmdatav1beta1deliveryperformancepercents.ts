import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents
/** 
 * Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons.
**/
export class GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents extends SpeakeasyBase {
  @Metadata({ data: "json, name=delayedDeviceDoze" })
  delayedDeviceDoze?: number;

  @Metadata({ data: "json, name=delayedDeviceOffline" })
  delayedDeviceOffline?: number;

  @Metadata({ data: "json, name=delayedMessageThrottled" })
  delayedMessageThrottled?: number;

  @Metadata({ data: "json, name=delayedUserStopped" })
  delayedUserStopped?: number;

  @Metadata({ data: "json, name=deliveredNoDelay" })
  deliveredNoDelay?: number;
}
