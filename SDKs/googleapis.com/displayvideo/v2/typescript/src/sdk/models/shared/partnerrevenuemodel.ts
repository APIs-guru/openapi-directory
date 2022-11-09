import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PartnerRevenueModelMarkupTypeEnum {
    PartnerRevenueModelMarkupTypeUnspecified = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED"
,    PartnerRevenueModelMarkupTypeCpm = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM"
,    PartnerRevenueModelMarkupTypeMediaCostMarkup = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP"
,    PartnerRevenueModelMarkupTypeTotalMediaCostMarkup = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP"
}


// PartnerRevenueModel
/** 
 * Settings that control how partner revenue is calculated.
**/
export class PartnerRevenueModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=markupAmount" })
  markupAmount?: string;

  @Metadata({ data: "json, name=markupType" })
  markupType?: PartnerRevenueModelMarkupTypeEnum;
}
