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
import { OrganizationRepresentation } from "./organizationrepresentation";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { SubscriptionPeriod } from "./subscriptionperiod";
import { UsePurpose } from "./usepurpose";
var SubscriptionRequestSubscription = /** @class */ (function (_super) {
    __extends(SubscriptionRequestSubscription, _super);
    function SubscriptionRequestSubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], SubscriptionRequestSubscription.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hips", elemType: OrganizationRepresentation }),
        __metadata("design:type", Array)
    ], SubscriptionRequestSubscription.prototype, "hips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiu" }),
        __metadata("design:type", OrganizationRepresentation)
    ], SubscriptionRequestSubscription.prototype, "hiu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patient" }),
        __metadata("design:type", ConsentManagerPatientId)
    ], SubscriptionRequestSubscription.prototype, "patient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", SubscriptionPeriod)
    ], SubscriptionRequestSubscription.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purpose" }),
        __metadata("design:type", UsePurpose)
    ], SubscriptionRequestSubscription.prototype, "purpose", void 0);
    return SubscriptionRequestSubscription;
}(SpeakeasyBase));
export { SubscriptionRequestSubscription };
var SubscriptionRequest = /** @class */ (function (_super) {
    __extends(SubscriptionRequest, _super);
    function SubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], SubscriptionRequest.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription" }),
        __metadata("design:type", SubscriptionRequestSubscription)
    ], SubscriptionRequest.prototype, "subscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], SubscriptionRequest.prototype, "timestamp", void 0);
    return SubscriptionRequest;
}(SpeakeasyBase));
export { SubscriptionRequest };
