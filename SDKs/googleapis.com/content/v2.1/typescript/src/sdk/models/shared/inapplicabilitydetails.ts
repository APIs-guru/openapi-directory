import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InapplicabilityDetailsInapplicableReasonEnum {
    InapplicableReasonUnspecified = "INAPPLICABLE_REASON_UNSPECIFIED"
,    CannotBeatBuyboxWinner = "CANNOT_BEAT_BUYBOX_WINNER"
,    AlreadyWinningBuybox = "ALREADY_WINNING_BUYBOX"
,    TriumphedOverBySameTypeRule = "TRIUMPHED_OVER_BY_SAME_TYPE_RULE"
,    TriumphedOverByOtherRuleOnOffer = "TRIUMPHED_OVER_BY_OTHER_RULE_ON_OFFER"
,    RestrictionsNotMet = "RESTRICTIONS_NOT_MET"
,    Uncategorized = "UNCATEGORIZED"
,    InvalidAutoPriceMin = "INVALID_AUTO_PRICE_MIN"
,    InvalidFloorConfig = "INVALID_FLOOR_CONFIG"
}


// InapplicabilityDetails
/** 
 * Map of inapplicability details.
**/
export class InapplicabilityDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=inapplicableCount" })
  inapplicableCount?: string;

  @Metadata({ data: "json, name=inapplicableReason" })
  inapplicableReason?: InapplicabilityDetailsInapplicableReasonEnum;
}
