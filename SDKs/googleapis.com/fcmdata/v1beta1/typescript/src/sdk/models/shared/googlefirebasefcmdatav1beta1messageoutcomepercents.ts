import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseFcmDataV1beta1MessageOutcomePercents
/** 
 * Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes.
**/
export class GoogleFirebaseFcmDataV1beta1MessageOutcomePercents extends SpeakeasyBase {
  @Metadata({ data: "json, name=delivered" })
  delivered?: number;

  @Metadata({ data: "json, name=droppedAppForceStopped" })
  droppedAppForceStopped?: number;

  @Metadata({ data: "json, name=droppedDeviceInactive" })
  droppedDeviceInactive?: number;

  @Metadata({ data: "json, name=droppedTooManyPendingMessages" })
  droppedTooManyPendingMessages?: number;

  @Metadata({ data: "json, name=pending" })
  pending?: number;
}
