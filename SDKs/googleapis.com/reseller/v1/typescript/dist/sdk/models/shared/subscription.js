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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RenewalSettings } from "./renewalsettings";
import { Seats } from "./seats";
// SubscriptionPlanCommitmentInterval
/**
 * In this version of the API, annual commitment plan's interval is one year. *Note: *When `billingMethod` value is `OFFLINE`, the subscription property object `plan.commitmentInterval` is omitted in all API responses.
**/
var SubscriptionPlanCommitmentInterval = /** @class */ (function (_super) {
    __extends(SubscriptionPlanCommitmentInterval, _super);
    function SubscriptionPlanCommitmentInterval() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], SubscriptionPlanCommitmentInterval.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], SubscriptionPlanCommitmentInterval.prototype, "startTime", void 0);
    return SubscriptionPlanCommitmentInterval;
}(SpeakeasyBase));
export { SubscriptionPlanCommitmentInterval };
// SubscriptionPlan
/**
 * The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts.
**/
var SubscriptionPlan = /** @class */ (function (_super) {
    __extends(SubscriptionPlan, _super);
    function SubscriptionPlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=commitmentInterval" }),
        __metadata("design:type", SubscriptionPlanCommitmentInterval)
    ], SubscriptionPlan.prototype, "commitmentInterval", void 0);
    __decorate([
        Metadata({ data: "json, name=isCommitmentPlan" }),
        __metadata("design:type", Boolean)
    ], SubscriptionPlan.prototype, "isCommitmentPlan", void 0);
    __decorate([
        Metadata({ data: "json, name=planName" }),
        __metadata("design:type", String)
    ], SubscriptionPlan.prototype, "planName", void 0);
    return SubscriptionPlan;
}(SpeakeasyBase));
export { SubscriptionPlan };
// SubscriptionTransferInfo
/**
 * Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.
**/
var SubscriptionTransferInfo = /** @class */ (function (_super) {
    __extends(SubscriptionTransferInfo, _super);
    function SubscriptionTransferInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=currentLegacySkuId" }),
        __metadata("design:type", String)
    ], SubscriptionTransferInfo.prototype, "currentLegacySkuId", void 0);
    __decorate([
        Metadata({ data: "json, name=minimumTransferableSeats" }),
        __metadata("design:type", Number)
    ], SubscriptionTransferInfo.prototype, "minimumTransferableSeats", void 0);
    __decorate([
        Metadata({ data: "json, name=transferabilityExpirationTime" }),
        __metadata("design:type", String)
    ], SubscriptionTransferInfo.prototype, "transferabilityExpirationTime", void 0);
    return SubscriptionTransferInfo;
}(SpeakeasyBase));
export { SubscriptionTransferInfo };
// SubscriptionTrialSettings
/**
 * The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.
**/
var SubscriptionTrialSettings = /** @class */ (function (_super) {
    __extends(SubscriptionTrialSettings, _super);
    function SubscriptionTrialSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=isInTrial" }),
        __metadata("design:type", Boolean)
    ], SubscriptionTrialSettings.prototype, "isInTrial", void 0);
    __decorate([
        Metadata({ data: "json, name=trialEndTime" }),
        __metadata("design:type", String)
    ], SubscriptionTrialSettings.prototype, "trialEndTime", void 0);
    return SubscriptionTrialSettings;
}(SpeakeasyBase));
export { SubscriptionTrialSettings };
// Subscription
/**
 * JSON template for a subscription.
**/
var Subscription = /** @class */ (function (_super) {
    __extends(Subscription, _super);
    function Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=billingMethod" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "billingMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=customerDomain" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "customerDomain", void 0);
    __decorate([
        Metadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "json, name=dealCode" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "dealCode", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=plan" }),
        __metadata("design:type", SubscriptionPlan)
    ], Subscription.prototype, "plan", void 0);
    __decorate([
        Metadata({ data: "json, name=purchaseOrderId" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "purchaseOrderId", void 0);
    __decorate([
        Metadata({ data: "json, name=renewalSettings" }),
        __metadata("design:type", RenewalSettings)
    ], Subscription.prototype, "renewalSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceUiUrl" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "resourceUiUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=seats" }),
        __metadata("design:type", Seats)
    ], Subscription.prototype, "seats", void 0);
    __decorate([
        Metadata({ data: "json, name=skuId" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "skuId", void 0);
    __decorate([
        Metadata({ data: "json, name=skuName" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "skuName", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=subscriptionId" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "subscriptionId", void 0);
    __decorate([
        Metadata({ data: "json, name=suspensionReasons" }),
        __metadata("design:type", Array)
    ], Subscription.prototype, "suspensionReasons", void 0);
    __decorate([
        Metadata({ data: "json, name=transferInfo" }),
        __metadata("design:type", SubscriptionTransferInfo)
    ], Subscription.prototype, "transferInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=trialSettings" }),
        __metadata("design:type", SubscriptionTrialSettings)
    ], Subscription.prototype, "trialSettings", void 0);
    return Subscription;
}(SpeakeasyBase));
export { Subscription };
