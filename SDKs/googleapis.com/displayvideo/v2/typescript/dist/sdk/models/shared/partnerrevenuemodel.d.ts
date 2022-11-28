import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PartnerRevenueModelMarkupTypeEnum {
    PartnerRevenueModelMarkupTypeUnspecified = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED",
    PartnerRevenueModelMarkupTypeCpm = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM",
    PartnerRevenueModelMarkupTypeMediaCostMarkup = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP",
    PartnerRevenueModelMarkupTypeTotalMediaCostMarkup = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP"
}
/**
 * Settings that control how partner revenue is calculated.
**/
export declare class PartnerRevenueModel extends SpeakeasyBase {
    markupAmount?: string;
    markupType?: PartnerRevenueModelMarkupTypeEnum;
}
