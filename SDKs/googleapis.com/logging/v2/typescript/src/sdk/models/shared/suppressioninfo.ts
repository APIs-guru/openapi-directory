import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SuppressionInfoReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    RateLimit = "RATE_LIMIT",
    NotConsumed = "NOT_CONSUMED"
}


// SuppressionInfo
/** 
 * Information about entries that were omitted from the session.
**/
export class SuppressionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: SuppressionInfoReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=suppressedCount" })
  suppressedCount?: number;
}
