import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SuppressionInfoReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED"
,    RateLimit = "RATE_LIMIT"
,    NotConsumed = "NOT_CONSUMED"
}


// SuppressionInfo
/** 
 * Information about entries that were omitted from the session.
**/
export class SuppressionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: SuppressionInfoReasonEnum;

  @Metadata({ data: "json, name=suppressedCount" })
  suppressedCount?: number;
}
