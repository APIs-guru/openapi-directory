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
import * as shared from "../shared";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails";
import { GoogleCloudPaymentsResellerSubscriptionV1Location } from "./googlecloudpaymentsresellersubscriptionv1location";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails";
export var GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum;
(function (GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum) {
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum["ProcessingStateUnspecified"] = "PROCESSING_STATE_UNSPECIFIED";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum["ProcessingStateCancelling"] = "PROCESSING_STATE_CANCELLING";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum["ProcessingStateRecurring"] = "PROCESSING_STATE_RECURRING";
})(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum || (GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum = {}));
export var GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum;
(function (GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum) {
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum["StateCreated"] = "STATE_CREATED";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum["StateActive"] = "STATE_ACTIVE";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum["StateCancelled"] = "STATE_CANCELLED";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum["StateInGracePeriod"] = "STATE_IN_GRACE_PERIOD";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum["StateCancelAtEndOfCycle"] = "STATE_CANCEL_AT_END_OF_CYCLE";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum["StateSuspended"] = "STATE_SUSPENDED";
})(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum || (GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum = {}));
// GoogleCloudPaymentsResellerSubscriptionV1Subscription
/**
 * A Subscription resource managed by 3P Partners.
**/
var GoogleCloudPaymentsResellerSubscriptionV1Subscription = /** @class */ (function (_super) {
    __extends(GoogleCloudPaymentsResellerSubscriptionV1Subscription, _super);
    function GoogleCloudPaymentsResellerSubscriptionV1Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cancellationDetails" }),
        __metadata("design:type", GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "cancellationDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=cycleEndTime" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "cycleEndTime", void 0);
    __decorate([
        Metadata({ data: "json, name=endUserEntitled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "endUserEntitled", void 0);
    __decorate([
        Metadata({ data: "json, name=freeTrialEndTime" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "freeTrialEndTime", void 0);
    __decorate([
        Metadata({ data: "json, name=lineItems", elemType: shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem }),
        __metadata("design:type", Array)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "lineItems", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=partnerUserToken" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "partnerUserToken", void 0);
    __decorate([
        Metadata({ data: "json, name=processingState" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "processingState", void 0);
    __decorate([
        Metadata({ data: "json, name=products" }),
        __metadata("design:type", Array)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "products", void 0);
    __decorate([
        Metadata({ data: "json, name=promotionSpecs", elemType: shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec }),
        __metadata("design:type", Array)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "promotionSpecs", void 0);
    __decorate([
        Metadata({ data: "json, name=promotions" }),
        __metadata("design:type", Array)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "promotions", void 0);
    __decorate([
        Metadata({ data: "json, name=redirectUri" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "redirectUri", void 0);
    __decorate([
        Metadata({ data: "json, name=renewalTime" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "renewalTime", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceLocation" }),
        __metadata("design:type", GoogleCloudPaymentsResellerSubscriptionV1Location)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "serviceLocation", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "updateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=upgradeDowngradeDetails" }),
        __metadata("design:type", GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails)
    ], GoogleCloudPaymentsResellerSubscriptionV1Subscription.prototype, "upgradeDowngradeDetails", void 0);
    return GoogleCloudPaymentsResellerSubscriptionV1Subscription;
}(SpeakeasyBase));
export { GoogleCloudPaymentsResellerSubscriptionV1Subscription };
