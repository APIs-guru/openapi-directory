import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseFcmDataV1beta1MessageOutcomePercents
/** 
 * Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes.
**/
export class GoogleFirebaseFcmDataV1beta1MessageOutcomePercents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delivered" })
  delivered?: number;

  @SpeakeasyMetadata({ data: "json, name=droppedAppForceStopped" })
  droppedAppForceStopped?: number;

  @SpeakeasyMetadata({ data: "json, name=droppedDeviceInactive" })
  droppedDeviceInactive?: number;

  @SpeakeasyMetadata({ data: "json, name=droppedTooManyPendingMessages" })
  droppedTooManyPendingMessages?: number;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: number;
}
