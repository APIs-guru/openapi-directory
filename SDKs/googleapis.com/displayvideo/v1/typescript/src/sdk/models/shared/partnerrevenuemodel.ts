import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PartnerRevenueModelMarkupTypeEnum {
    PartnerRevenueModelMarkupTypeUnspecified = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED",
    PartnerRevenueModelMarkupTypeCpm = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM",
    PartnerRevenueModelMarkupTypeMediaCostMarkup = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP",
    PartnerRevenueModelMarkupTypeTotalMediaCostMarkup = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP"
}


// PartnerRevenueModel
/** 
 * Settings that control how partner revenue is calculated.
**/
export class PartnerRevenueModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=markupAmount" })
  markupAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=markupType" })
  markupType?: PartnerRevenueModelMarkupTypeEnum;
}
