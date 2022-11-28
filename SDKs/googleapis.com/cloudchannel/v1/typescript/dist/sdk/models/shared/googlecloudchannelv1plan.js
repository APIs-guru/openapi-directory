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
import { GoogleCloudChannelV1Period } from "./googlecloudchannelv1period";
export var GoogleCloudChannelV1PlanPaymentPlanEnum;
(function (GoogleCloudChannelV1PlanPaymentPlanEnum) {
    GoogleCloudChannelV1PlanPaymentPlanEnum["PaymentPlanUnspecified"] = "PAYMENT_PLAN_UNSPECIFIED";
    GoogleCloudChannelV1PlanPaymentPlanEnum["Commitment"] = "COMMITMENT";
    GoogleCloudChannelV1PlanPaymentPlanEnum["Flexible"] = "FLEXIBLE";
    GoogleCloudChannelV1PlanPaymentPlanEnum["Free"] = "FREE";
    GoogleCloudChannelV1PlanPaymentPlanEnum["Trial"] = "TRIAL";
    GoogleCloudChannelV1PlanPaymentPlanEnum["Offline"] = "OFFLINE";
})(GoogleCloudChannelV1PlanPaymentPlanEnum || (GoogleCloudChannelV1PlanPaymentPlanEnum = {}));
export var GoogleCloudChannelV1PlanPaymentTypeEnum;
(function (GoogleCloudChannelV1PlanPaymentTypeEnum) {
    GoogleCloudChannelV1PlanPaymentTypeEnum["PaymentTypeUnspecified"] = "PAYMENT_TYPE_UNSPECIFIED";
    GoogleCloudChannelV1PlanPaymentTypeEnum["Prepay"] = "PREPAY";
    GoogleCloudChannelV1PlanPaymentTypeEnum["Postpay"] = "POSTPAY";
})(GoogleCloudChannelV1PlanPaymentTypeEnum || (GoogleCloudChannelV1PlanPaymentTypeEnum = {}));
// GoogleCloudChannelV1Plan
/**
 * The payment plan for the Offer. Describes how to make a payment.
**/
var GoogleCloudChannelV1Plan = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1Plan, _super);
    function GoogleCloudChannelV1Plan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Plan.prototype, "billingAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentCycle" }),
        __metadata("design:type", GoogleCloudChannelV1Period)
    ], GoogleCloudChannelV1Plan.prototype, "paymentCycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentPlan" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Plan.prototype, "paymentPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentType" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Plan.prototype, "paymentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trialPeriod" }),
        __metadata("design:type", GoogleCloudChannelV1Period)
    ], GoogleCloudChannelV1Plan.prototype, "trialPeriod", void 0);
    return GoogleCloudChannelV1Plan;
}(SpeakeasyBase));
export { GoogleCloudChannelV1Plan };
