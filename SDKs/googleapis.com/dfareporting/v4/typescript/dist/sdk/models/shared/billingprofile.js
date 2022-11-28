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
export var BillingProfileInvoiceLevelEnum;
(function (BillingProfileInvoiceLevelEnum) {
    BillingProfileInvoiceLevelEnum["AccountLevel"] = "ACCOUNT_LEVEL";
    BillingProfileInvoiceLevelEnum["AdvertiserLevel"] = "ADVERTISER_LEVEL";
    BillingProfileInvoiceLevelEnum["CampaignLevel"] = "CAMPAIGN_LEVEL";
})(BillingProfileInvoiceLevelEnum || (BillingProfileInvoiceLevelEnum = {}));
export var BillingProfileStatusEnum;
(function (BillingProfileStatusEnum) {
    BillingProfileStatusEnum["UnderReview"] = "UNDER_REVIEW";
    BillingProfileStatusEnum["Active"] = "ACTIVE";
    BillingProfileStatusEnum["Archived"] = "ARCHIVED";
})(BillingProfileStatusEnum || (BillingProfileStatusEnum = {}));
// BillingProfile
/**
 * Contains properties of a Campaign Manager Billing Profile.
**/
var BillingProfile = /** @class */ (function (_super) {
    __extends(BillingProfile, _super);
    function BillingProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consolidatedInvoice" }),
        __metadata("design:type", Boolean)
    ], BillingProfile.prototype, "consolidatedInvoice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invoiceLevel" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "invoiceLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDefault" }),
        __metadata("design:type", Boolean)
    ], BillingProfile.prototype, "isDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentsAccountId" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "paymentsAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentsCustomerId" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "paymentsCustomerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseOrder" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "purchaseOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryPaymentsCustomerId" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "secondaryPaymentsCustomerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], BillingProfile.prototype, "status", void 0);
    return BillingProfile;
}(SpeakeasyBase));
export { BillingProfile };
