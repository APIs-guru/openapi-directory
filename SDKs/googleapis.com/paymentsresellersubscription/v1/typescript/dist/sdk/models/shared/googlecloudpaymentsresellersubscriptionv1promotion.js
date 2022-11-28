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
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails";
import { GoogleTypeLocalizedText } from "./googletypelocalizedtext";
export var GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum;
(function (GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum) {
    GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum["PromotionTypeUnspecified"] = "PROMOTION_TYPE_UNSPECIFIED";
    GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum["PromotionTypeFreeTrial"] = "PROMOTION_TYPE_FREE_TRIAL";
    GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum["PromotionTypeIntroductoryPricing"] = "PROMOTION_TYPE_INTRODUCTORY_PRICING";
})(GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum || (GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum = {}));
// GoogleCloudPaymentsResellerSubscriptionV1Promotion
/**
 * A Promotion resource that defines a promotion for a subscription that can be resold.
**/
var GoogleCloudPaymentsResellerSubscriptionV1Promotion = /** @class */ (function (_super) {
    __extends(GoogleCloudPaymentsResellerSubscriptionV1Promotion, _super);
    function GoogleCloudPaymentsResellerSubscriptionV1Promotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicableProducts" }),
        __metadata("design:type", Array)
    ], GoogleCloudPaymentsResellerSubscriptionV1Promotion.prototype, "applicableProducts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Promotion.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeTrialDuration" }),
        __metadata("design:type", GoogleCloudPaymentsResellerSubscriptionV1Duration)
    ], GoogleCloudPaymentsResellerSubscriptionV1Promotion.prototype, "freeTrialDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=introductoryPricingDetails" }),
        __metadata("design:type", GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails)
    ], GoogleCloudPaymentsResellerSubscriptionV1Promotion.prototype, "introductoryPricingDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Promotion.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionType" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Promotion.prototype, "promotionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionCodes" }),
        __metadata("design:type", Array)
    ], GoogleCloudPaymentsResellerSubscriptionV1Promotion.prototype, "regionCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Promotion.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=titles", elemType: GoogleTypeLocalizedText }),
        __metadata("design:type", Array)
    ], GoogleCloudPaymentsResellerSubscriptionV1Promotion.prototype, "titles", void 0);
    return GoogleCloudPaymentsResellerSubscriptionV1Promotion;
}(SpeakeasyBase));
export { GoogleCloudPaymentsResellerSubscriptionV1Promotion };
