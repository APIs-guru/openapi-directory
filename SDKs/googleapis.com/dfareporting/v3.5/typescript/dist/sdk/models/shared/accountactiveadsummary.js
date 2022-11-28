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
export var AccountActiveAdSummaryActiveAdsLimitTierEnum;
(function (AccountActiveAdSummaryActiveAdsLimitTierEnum) {
    AccountActiveAdSummaryActiveAdsLimitTierEnum["ActiveAdsTier40K"] = "ACTIVE_ADS_TIER_40K";
    AccountActiveAdSummaryActiveAdsLimitTierEnum["ActiveAdsTier75K"] = "ACTIVE_ADS_TIER_75K";
    AccountActiveAdSummaryActiveAdsLimitTierEnum["ActiveAdsTier100K"] = "ACTIVE_ADS_TIER_100K";
    AccountActiveAdSummaryActiveAdsLimitTierEnum["ActiveAdsTier200K"] = "ACTIVE_ADS_TIER_200K";
    AccountActiveAdSummaryActiveAdsLimitTierEnum["ActiveAdsTier300K"] = "ACTIVE_ADS_TIER_300K";
    AccountActiveAdSummaryActiveAdsLimitTierEnum["ActiveAdsTier500K"] = "ACTIVE_ADS_TIER_500K";
    AccountActiveAdSummaryActiveAdsLimitTierEnum["ActiveAdsTier750K"] = "ACTIVE_ADS_TIER_750K";
    AccountActiveAdSummaryActiveAdsLimitTierEnum["ActiveAdsTier1M"] = "ACTIVE_ADS_TIER_1M";
})(AccountActiveAdSummaryActiveAdsLimitTierEnum || (AccountActiveAdSummaryActiveAdsLimitTierEnum = {}));
// AccountActiveAdSummary
/**
 * Gets a summary of active ads in an account.
**/
var AccountActiveAdSummary = /** @class */ (function (_super) {
    __extends(AccountActiveAdSummary, _super);
    function AccountActiveAdSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], AccountActiveAdSummary.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeAds" }),
        __metadata("design:type", String)
    ], AccountActiveAdSummary.prototype, "activeAds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeAdsLimitTier" }),
        __metadata("design:type", String)
    ], AccountActiveAdSummary.prototype, "activeAdsLimitTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableAds" }),
        __metadata("design:type", String)
    ], AccountActiveAdSummary.prototype, "availableAds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], AccountActiveAdSummary.prototype, "kind", void 0);
    return AccountActiveAdSummary;
}(SpeakeasyBase));
export { AccountActiveAdSummary };
