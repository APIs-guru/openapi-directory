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
import { ReportsConfiguration } from "./reportsconfiguration";
export var AccountAccountProfileEnum;
(function (AccountAccountProfileEnum) {
    AccountAccountProfileEnum["AccountProfileBasic"] = "ACCOUNT_PROFILE_BASIC";
    AccountAccountProfileEnum["AccountProfileStandard"] = "ACCOUNT_PROFILE_STANDARD";
})(AccountAccountProfileEnum || (AccountAccountProfileEnum = {}));
export var AccountActiveAdsLimitTierEnum;
(function (AccountActiveAdsLimitTierEnum) {
    AccountActiveAdsLimitTierEnum["ActiveAdsTier40K"] = "ACTIVE_ADS_TIER_40K";
    AccountActiveAdsLimitTierEnum["ActiveAdsTier75K"] = "ACTIVE_ADS_TIER_75K";
    AccountActiveAdsLimitTierEnum["ActiveAdsTier100K"] = "ACTIVE_ADS_TIER_100K";
    AccountActiveAdsLimitTierEnum["ActiveAdsTier200K"] = "ACTIVE_ADS_TIER_200K";
    AccountActiveAdsLimitTierEnum["ActiveAdsTier300K"] = "ACTIVE_ADS_TIER_300K";
    AccountActiveAdsLimitTierEnum["ActiveAdsTier500K"] = "ACTIVE_ADS_TIER_500K";
    AccountActiveAdsLimitTierEnum["ActiveAdsTier750K"] = "ACTIVE_ADS_TIER_750K";
    AccountActiveAdsLimitTierEnum["ActiveAdsTier1M"] = "ACTIVE_ADS_TIER_1M";
})(AccountActiveAdsLimitTierEnum || (AccountActiveAdsLimitTierEnum = {}));
// Account
/**
 * Contains properties of a Campaign Manager account.
**/
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountPermissionIds" }),
        __metadata("design:type", Array)
    ], Account.prototype, "accountPermissionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountProfile" }),
        __metadata("design:type", String)
    ], Account.prototype, "accountProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeAdsLimitTier" }),
        __metadata("design:type", String)
    ], Account.prototype, "activeAdsLimitTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeViewOptOut" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "activeViewOptOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availablePermissionIds" }),
        __metadata("design:type", Array)
    ], Account.prototype, "availablePermissionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryId" }),
        __metadata("design:type", String)
    ], Account.prototype, "countryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyId" }),
        __metadata("design:type", String)
    ], Account.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultCreativeSizeId" }),
        __metadata("design:type", String)
    ], Account.prototype, "defaultCreativeSizeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Account.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Account.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Account.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], Account.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumImageSize" }),
        __metadata("design:type", String)
    ], Account.prototype, "maximumImageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Account.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nielsenOcrEnabled" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "nielsenOcrEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportsConfiguration" }),
        __metadata("design:type", ReportsConfiguration)
    ], Account.prototype, "reportsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shareReportsWithTwitter" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "shareReportsWithTwitter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teaserSizeLimit" }),
        __metadata("design:type", String)
    ], Account.prototype, "teaserSizeLimit", void 0);
    return Account;
}(SpeakeasyBase));
export { Account };
