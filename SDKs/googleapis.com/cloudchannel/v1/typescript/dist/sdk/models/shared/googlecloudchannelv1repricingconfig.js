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
import { GoogleCloudChannelV1RepricingAdjustment } from "./googlecloudchannelv1repricingadjustment";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleCloudChannelV1RepricingConfigEntitlementGranularity } from "./googlecloudchannelv1repricingconfigentitlementgranularity";
export var GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
(function (GoogleCloudChannelV1RepricingConfigRebillingBasisEnum) {
    GoogleCloudChannelV1RepricingConfigRebillingBasisEnum["RebillingBasisUnspecified"] = "REBILLING_BASIS_UNSPECIFIED";
    GoogleCloudChannelV1RepricingConfigRebillingBasisEnum["CostAtList"] = "COST_AT_LIST";
    GoogleCloudChannelV1RepricingConfigRebillingBasisEnum["DirectCustomerCost"] = "DIRECT_CUSTOMER_COST";
})(GoogleCloudChannelV1RepricingConfigRebillingBasisEnum || (GoogleCloudChannelV1RepricingConfigRebillingBasisEnum = {}));
// GoogleCloudChannelV1RepricingConfig
/**
 * Configuration for repricing a Google bill over a period of time.
**/
var GoogleCloudChannelV1RepricingConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1RepricingConfig, _super);
    function GoogleCloudChannelV1RepricingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adjustment" }),
        __metadata("design:type", GoogleCloudChannelV1RepricingAdjustment)
    ], GoogleCloudChannelV1RepricingConfig.prototype, "adjustment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelPartnerGranularity" }),
        __metadata("design:type", Map)
    ], GoogleCloudChannelV1RepricingConfig.prototype, "channelPartnerGranularity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveInvoiceMonth" }),
        __metadata("design:type", GoogleTypeDate)
    ], GoogleCloudChannelV1RepricingConfig.prototype, "effectiveInvoiceMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entitlementGranularity" }),
        __metadata("design:type", GoogleCloudChannelV1RepricingConfigEntitlementGranularity)
    ], GoogleCloudChannelV1RepricingConfig.prototype, "entitlementGranularity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rebillingBasis" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1RepricingConfig.prototype, "rebillingBasis", void 0);
    return GoogleCloudChannelV1RepricingConfig;
}(SpeakeasyBase));
export { GoogleCloudChannelV1RepricingConfig };
