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
// ApiPlanSubscriptionOut
/**
 * The API Plan governing the subscription.
**/
var ApiPlanSubscriptionOut = /** @class */ (function (_super) {
    __extends(ApiPlanSubscriptionOut, _super);
    function ApiPlanSubscriptionOut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKey" }),
        __metadata("design:type", String)
    ], ApiPlanSubscriptionOut.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ApiPlanSubscriptionOut.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyFactor" }),
        __metadata("design:type", Number)
    ], ApiPlanSubscriptionOut.prototype, "currencyFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planBaseFeesKey" }),
        __metadata("design:type", String)
    ], ApiPlanSubscriptionOut.prototype, "planBaseFeesKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planEnded" }),
        __metadata("design:type", Number)
    ], ApiPlanSubscriptionOut.prototype, "planEnded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planName" }),
        __metadata("design:type", String)
    ], ApiPlanSubscriptionOut.prototype, "planName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planQuota" }),
        __metadata("design:type", Number)
    ], ApiPlanSubscriptionOut.prototype, "planQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planStarted" }),
        __metadata("design:type", Number)
    ], ApiPlanSubscriptionOut.prototype, "planStarted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planStatus" }),
        __metadata("design:type", String)
    ], ApiPlanSubscriptionOut.prototype, "planStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], ApiPlanSubscriptionOut.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceOverage" }),
        __metadata("design:type", Number)
    ], ApiPlanSubscriptionOut.prototype, "priceOverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceOverageUSD" }),
        __metadata("design:type", Number)
    ], ApiPlanSubscriptionOut.prototype, "priceOverageUsd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceUSD" }),
        __metadata("design:type", Number)
    ], ApiPlanSubscriptionOut.prototype, "priceUsd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priorPlanStarted" }),
        __metadata("design:type", Number)
    ], ApiPlanSubscriptionOut.prototype, "priorPlanStarted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripeCustomerId" }),
        __metadata("design:type", String)
    ], ApiPlanSubscriptionOut.prototype, "stripeCustomerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripeStatus" }),
        __metadata("design:type", String)
    ], ApiPlanSubscriptionOut.prototype, "stripeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripeSubscription" }),
        __metadata("design:type", String)
    ], ApiPlanSubscriptionOut.prototype, "stripeSubscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxRate" }),
        __metadata("design:type", Number)
    ], ApiPlanSubscriptionOut.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], ApiPlanSubscriptionOut.prototype, "userId", void 0);
    return ApiPlanSubscriptionOut;
}(SpeakeasyBase));
export { ApiPlanSubscriptionOut };
