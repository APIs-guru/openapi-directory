import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Quotas
/** 
 * Quotas state for an api key on a service group
**/
export class Quotas extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizedCallsPerDay" })
  authorizedCallsPerDay: number;

  @SpeakeasyMetadata({ data: "json, name=authorizedCallsPerMonth" })
  authorizedCallsPerMonth: number;

  @SpeakeasyMetadata({ data: "json, name=authorizedCallsPerSec" })
  authorizedCallsPerSec: number;

  @SpeakeasyMetadata({ data: "json, name=currentCallsPerDay" })
  currentCallsPerDay: number;

  @SpeakeasyMetadata({ data: "json, name=currentCallsPerMonth" })
  currentCallsPerMonth: number;

  @SpeakeasyMetadata({ data: "json, name=currentCallsPerSec" })
  currentCallsPerSec: number;

  @SpeakeasyMetadata({ data: "json, name=remainingCallsPerDay" })
  remainingCallsPerDay: number;

  @SpeakeasyMetadata({ data: "json, name=remainingCallsPerMonth" })
  remainingCallsPerMonth: number;

  @SpeakeasyMetadata({ data: "json, name=remainingCallsPerSec" })
  remainingCallsPerSec: number;
}
