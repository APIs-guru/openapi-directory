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
export var GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum;
(function (GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum) {
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum["CancellationReasonUnspecified"] = "CANCELLATION_REASON_UNSPECIFIED";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum["CancellationReasonFraud"] = "CANCELLATION_REASON_FRAUD";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum["CancellationReasonRemorse"] = "CANCELLATION_REASON_REMORSE";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum["CancellationReasonAccidentalPurchase"] = "CANCELLATION_REASON_ACCIDENTAL_PURCHASE";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum["CancellationReasonPastDue"] = "CANCELLATION_REASON_PAST_DUE";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum["CancellationReasonAccountClosed"] = "CANCELLATION_REASON_ACCOUNT_CLOSED";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum["CancellationReasonUpgradeDowngrade"] = "CANCELLATION_REASON_UPGRADE_DOWNGRADE";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum["CancellationReasonUserDelinquency"] = "CANCELLATION_REASON_USER_DELINQUENCY";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum["CancellationReasonOther"] = "CANCELLATION_REASON_OTHER";
})(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum || (GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum = {}));
// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails
/**
 * Describes the details of a cancelled or cancelling subscription.
**/
var GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails = /** @class */ (function (_super) {
    __extends(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails, _super);
    function GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails.prototype, "reason", void 0);
    return GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;
}(SpeakeasyBase));
export { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails };
