var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var PartnerCostCostTypeEnum;
(function (PartnerCostCostTypeEnum) {
    PartnerCostCostTypeEnum["PartnerCostTypeUnspecified"] = "PARTNER_COST_TYPE_UNSPECIFIED";
    PartnerCostCostTypeEnum["PartnerCostTypeAdloox"] = "PARTNER_COST_TYPE_ADLOOX";
    PartnerCostCostTypeEnum["PartnerCostTypeAdlooxPrebid"] = "PARTNER_COST_TYPE_ADLOOX_PREBID";
    PartnerCostCostTypeEnum["PartnerCostTypeAdsafe"] = "PARTNER_COST_TYPE_ADSAFE";
    PartnerCostCostTypeEnum["PartnerCostTypeAdxpose"] = "PARTNER_COST_TYPE_ADXPOSE";
    PartnerCostCostTypeEnum["PartnerCostTypeAggregateKnowledge"] = "PARTNER_COST_TYPE_AGGREGATE_KNOWLEDGE";
    PartnerCostCostTypeEnum["PartnerCostTypeAgencyTradingDesk"] = "PARTNER_COST_TYPE_AGENCY_TRADING_DESK";
    PartnerCostCostTypeEnum["PartnerCostTypeDv360Fee"] = "PARTNER_COST_TYPE_DV360_FEE";
    PartnerCostCostTypeEnum["PartnerCostTypeComscoreVce"] = "PARTNER_COST_TYPE_COMSCORE_VCE";
    PartnerCostCostTypeEnum["PartnerCostTypeDataManagementPlatform"] = "PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM";
    PartnerCostCostTypeEnum["PartnerCostTypeDefault"] = "PARTNER_COST_TYPE_DEFAULT";
    PartnerCostCostTypeEnum["PartnerCostTypeDoubleVerify"] = "PARTNER_COST_TYPE_DOUBLE_VERIFY";
    PartnerCostCostTypeEnum["PartnerCostTypeDoubleVerifyPrebid"] = "PARTNER_COST_TYPE_DOUBLE_VERIFY_PREBID";
    PartnerCostCostTypeEnum["PartnerCostTypeEvidon"] = "PARTNER_COST_TYPE_EVIDON";
    PartnerCostCostTypeEnum["PartnerCostTypeIntegralAdScienceVideo"] = "PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO";
    PartnerCostCostTypeEnum["PartnerCostTypeIntegralAdSciencePrebid"] = "PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID";
    PartnerCostCostTypeEnum["PartnerCostTypeMediaCostData"] = "PARTNER_COST_TYPE_MEDIA_COST_DATA";
    PartnerCostCostTypeEnum["PartnerCostTypeMoatVideo"] = "PARTNER_COST_TYPE_MOAT_VIDEO";
    PartnerCostCostTypeEnum["PartnerCostTypeNielsenDar"] = "PARTNER_COST_TYPE_NIELSEN_DAR";
    PartnerCostCostTypeEnum["PartnerCostTypeShopLocal"] = "PARTNER_COST_TYPE_SHOP_LOCAL";
    PartnerCostCostTypeEnum["PartnerCostTypeTeracent"] = "PARTNER_COST_TYPE_TERACENT";
    PartnerCostCostTypeEnum["PartnerCostTypeThirdPartyAdServer"] = "PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER";
    PartnerCostCostTypeEnum["PartnerCostTypeTrustMetrics"] = "PARTNER_COST_TYPE_TRUST_METRICS";
    PartnerCostCostTypeEnum["PartnerCostTypeVizu"] = "PARTNER_COST_TYPE_VIZU";
    PartnerCostCostTypeEnum["PartnerCostTypeAdlingoFee"] = "PARTNER_COST_TYPE_ADLINGO_FEE";
    PartnerCostCostTypeEnum["PartnerCostTypeCustomFee1"] = "PARTNER_COST_TYPE_CUSTOM_FEE_1";
    PartnerCostCostTypeEnum["PartnerCostTypeCustomFee2"] = "PARTNER_COST_TYPE_CUSTOM_FEE_2";
    PartnerCostCostTypeEnum["PartnerCostTypeCustomFee3"] = "PARTNER_COST_TYPE_CUSTOM_FEE_3";
    PartnerCostCostTypeEnum["PartnerCostTypeCustomFee4"] = "PARTNER_COST_TYPE_CUSTOM_FEE_4";
    PartnerCostCostTypeEnum["PartnerCostTypeCustomFee5"] = "PARTNER_COST_TYPE_CUSTOM_FEE_5";
})(PartnerCostCostTypeEnum || (PartnerCostCostTypeEnum = {}));
export var PartnerCostFeeTypeEnum;
(function (PartnerCostFeeTypeEnum) {
    PartnerCostFeeTypeEnum["PartnerCostFeeTypeUnspecified"] = "PARTNER_COST_FEE_TYPE_UNSPECIFIED";
    PartnerCostFeeTypeEnum["PartnerCostFeeTypeCpmFee"] = "PARTNER_COST_FEE_TYPE_CPM_FEE";
    PartnerCostFeeTypeEnum["PartnerCostFeeTypeMediaFee"] = "PARTNER_COST_FEE_TYPE_MEDIA_FEE";
})(PartnerCostFeeTypeEnum || (PartnerCostFeeTypeEnum = {}));
export var PartnerCostInvoiceTypeEnum;
(function (PartnerCostInvoiceTypeEnum) {
    PartnerCostInvoiceTypeEnum["PartnerCostInvoiceTypeUnspecified"] = "PARTNER_COST_INVOICE_TYPE_UNSPECIFIED";
    PartnerCostInvoiceTypeEnum["PartnerCostInvoiceTypeDv360"] = "PARTNER_COST_INVOICE_TYPE_DV360";
    PartnerCostInvoiceTypeEnum["PartnerCostInvoiceTypePartner"] = "PARTNER_COST_INVOICE_TYPE_PARTNER";
})(PartnerCostInvoiceTypeEnum || (PartnerCostInvoiceTypeEnum = {}));
// PartnerCost
/**
 * Settings that control a partner cost. A partner cost is any type of expense involved in running a campaign, other than the costs of purchasing impressions (which is called the media cost) and using third-party audience segment data (data fee). Some examples of partner costs include the fees for using DV360, a third-party ad server, or a third-party ad serving verification service.
**/
var PartnerCost = /** @class */ (function (_super) {
    __extends(PartnerCost, _super);
    function PartnerCost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costType" }),
        __metadata("design:type", String)
    ], PartnerCost.prototype, "costType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feeAmount" }),
        __metadata("design:type", String)
    ], PartnerCost.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feePercentageMillis" }),
        __metadata("design:type", String)
    ], PartnerCost.prototype, "feePercentageMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feeType" }),
        __metadata("design:type", String)
    ], PartnerCost.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invoiceType" }),
        __metadata("design:type", String)
    ], PartnerCost.prototype, "invoiceType", void 0);
    return PartnerCost;
}(SpeakeasyBase));
export { PartnerCost };
