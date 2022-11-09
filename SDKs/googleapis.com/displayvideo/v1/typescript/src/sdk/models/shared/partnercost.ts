import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PartnerCostCostTypeEnum {
    PartnerCostTypeUnspecified = "PARTNER_COST_TYPE_UNSPECIFIED"
,    PartnerCostTypeAdloox = "PARTNER_COST_TYPE_ADLOOX"
,    PartnerCostTypeAdlooxPrebid = "PARTNER_COST_TYPE_ADLOOX_PREBID"
,    PartnerCostTypeAdsafe = "PARTNER_COST_TYPE_ADSAFE"
,    PartnerCostTypeAdxpose = "PARTNER_COST_TYPE_ADXPOSE"
,    PartnerCostTypeAggregateKnowledge = "PARTNER_COST_TYPE_AGGREGATE_KNOWLEDGE"
,    PartnerCostTypeAgencyTradingDesk = "PARTNER_COST_TYPE_AGENCY_TRADING_DESK"
,    PartnerCostTypeDv360Fee = "PARTNER_COST_TYPE_DV360_FEE"
,    PartnerCostTypeComscoreVce = "PARTNER_COST_TYPE_COMSCORE_VCE"
,    PartnerCostTypeDataManagementPlatform = "PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM"
,    PartnerCostTypeDefault = "PARTNER_COST_TYPE_DEFAULT"
,    PartnerCostTypeDoubleVerify = "PARTNER_COST_TYPE_DOUBLE_VERIFY"
,    PartnerCostTypeDoubleVerifyPrebid = "PARTNER_COST_TYPE_DOUBLE_VERIFY_PREBID"
,    PartnerCostTypeEvidon = "PARTNER_COST_TYPE_EVIDON"
,    PartnerCostTypeIntegralAdScienceVideo = "PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO"
,    PartnerCostTypeIntegralAdSciencePrebid = "PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID"
,    PartnerCostTypeMediaCostData = "PARTNER_COST_TYPE_MEDIA_COST_DATA"
,    PartnerCostTypeMoatVideo = "PARTNER_COST_TYPE_MOAT_VIDEO"
,    PartnerCostTypeNielsenDar = "PARTNER_COST_TYPE_NIELSEN_DAR"
,    PartnerCostTypeShopLocal = "PARTNER_COST_TYPE_SHOP_LOCAL"
,    PartnerCostTypeTeracent = "PARTNER_COST_TYPE_TERACENT"
,    PartnerCostTypeThirdPartyAdServer = "PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER"
,    PartnerCostTypeTrustMetrics = "PARTNER_COST_TYPE_TRUST_METRICS"
,    PartnerCostTypeVizu = "PARTNER_COST_TYPE_VIZU"
,    PartnerCostTypeAdlingoFee = "PARTNER_COST_TYPE_ADLINGO_FEE"
,    PartnerCostTypeCustomFee1 = "PARTNER_COST_TYPE_CUSTOM_FEE_1"
,    PartnerCostTypeCustomFee2 = "PARTNER_COST_TYPE_CUSTOM_FEE_2"
,    PartnerCostTypeCustomFee3 = "PARTNER_COST_TYPE_CUSTOM_FEE_3"
,    PartnerCostTypeCustomFee4 = "PARTNER_COST_TYPE_CUSTOM_FEE_4"
,    PartnerCostTypeCustomFee5 = "PARTNER_COST_TYPE_CUSTOM_FEE_5"
}

export enum PartnerCostFeeTypeEnum {
    PartnerCostFeeTypeUnspecified = "PARTNER_COST_FEE_TYPE_UNSPECIFIED"
,    PartnerCostFeeTypeCpmFee = "PARTNER_COST_FEE_TYPE_CPM_FEE"
,    PartnerCostFeeTypeMediaFee = "PARTNER_COST_FEE_TYPE_MEDIA_FEE"
}

export enum PartnerCostInvoiceTypeEnum {
    PartnerCostInvoiceTypeUnspecified = "PARTNER_COST_INVOICE_TYPE_UNSPECIFIED"
,    PartnerCostInvoiceTypeDv360 = "PARTNER_COST_INVOICE_TYPE_DV360"
,    PartnerCostInvoiceTypePartner = "PARTNER_COST_INVOICE_TYPE_PARTNER"
}


// PartnerCost
/** 
 * Settings that control a partner cost. A partner cost is any type of expense involved in running a campaign, other than the costs of purchasing impressions (which is called the media cost) and using third-party audience segment data (data fee). Some examples of partner costs include the fees for using DV360, a third-party ad server, or a third-party ad serving verification service.
**/
export class PartnerCost extends SpeakeasyBase {
  @Metadata({ data: "json, name=costType" })
  costType?: PartnerCostCostTypeEnum;

  @Metadata({ data: "json, name=feeAmount" })
  feeAmount?: string;

  @Metadata({ data: "json, name=feePercentageMillis" })
  feePercentageMillis?: string;

  @Metadata({ data: "json, name=feeType" })
  feeType?: PartnerCostFeeTypeEnum;

  @Metadata({ data: "json, name=invoiceType" })
  invoiceType?: PartnerCostInvoiceTypeEnum;
}
