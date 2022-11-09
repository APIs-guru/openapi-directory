import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Quotas
/** 
 * Quotas state for an api key on a service group
**/
export class Quotas extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizedCallsPerDay" })
  authorizedCallsPerDay: number;

  @Metadata({ data: "json, name=authorizedCallsPerMonth" })
  authorizedCallsPerMonth: number;

  @Metadata({ data: "json, name=authorizedCallsPerSec" })
  authorizedCallsPerSec: number;

  @Metadata({ data: "json, name=currentCallsPerDay" })
  currentCallsPerDay: number;

  @Metadata({ data: "json, name=currentCallsPerMonth" })
  currentCallsPerMonth: number;

  @Metadata({ data: "json, name=currentCallsPerSec" })
  currentCallsPerSec: number;

  @Metadata({ data: "json, name=remainingCallsPerDay" })
  remainingCallsPerDay: number;

  @Metadata({ data: "json, name=remainingCallsPerMonth" })
  remainingCallsPerMonth: number;

  @Metadata({ data: "json, name=remainingCallsPerSec" })
  remainingCallsPerSec: number;
}
