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
export var GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum;
(function (GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum) {
    GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum["PaymentPlanUnspecified"] = "PAYMENT_PLAN_UNSPECIFIED";
    GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum["Commitment"] = "COMMITMENT";
    GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum["Flexible"] = "FLEXIBLE";
    GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum["Free"] = "FREE";
    GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum["Trial"] = "TRIAL";
    GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum["Offline"] = "OFFLINE";
})(GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum || (GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum = {}));
// GoogleCloudChannelV1RenewalSettings
/**
 * Renewal settings for renewable Offers.
**/
var GoogleCloudChannelV1RenewalSettings = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1RenewalSettings, _super);
    function GoogleCloudChannelV1RenewalSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableRenewal" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudChannelV1RenewalSettings.prototype, "enableRenewal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentCycle" }),
        __metadata("design:type", GoogleCloudChannelV1Period)
    ], GoogleCloudChannelV1RenewalSettings.prototype, "paymentCycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentPlan" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1RenewalSettings.prototype, "paymentPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resizeUnitCount" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudChannelV1RenewalSettings.prototype, "resizeUnitCount", void 0);
    return GoogleCloudChannelV1RenewalSettings;
}(SpeakeasyBase));
export { GoogleCloudChannelV1RenewalSettings };
