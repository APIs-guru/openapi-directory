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
export var GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum;
(function (GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum) {
    GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum["CancellationReasonUnspecified"] = "CANCELLATION_REASON_UNSPECIFIED";
    GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum["CancellationReasonFraud"] = "CANCELLATION_REASON_FRAUD";
    GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum["CancellationReasonRemorse"] = "CANCELLATION_REASON_REMORSE";
    GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum["CancellationReasonAccidentalPurchase"] = "CANCELLATION_REASON_ACCIDENTAL_PURCHASE";
    GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum["CancellationReasonPastDue"] = "CANCELLATION_REASON_PAST_DUE";
    GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum["CancellationReasonAccountClosed"] = "CANCELLATION_REASON_ACCOUNT_CLOSED";
    GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum["CancellationReasonUpgradeDowngrade"] = "CANCELLATION_REASON_UPGRADE_DOWNGRADE";
    GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum["CancellationReasonUserDelinquency"] = "CANCELLATION_REASON_USER_DELINQUENCY";
    GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum["CancellationReasonOther"] = "CANCELLATION_REASON_OTHER";
})(GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum || (GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum = {}));
var GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest, _super);
    function GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelImmediately" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest.prototype, "cancelImmediately", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellationReason" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest.prototype, "cancellationReason", void 0);
    return GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest;
}(SpeakeasyBase));
export { GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest };
