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
import { ObCashAccount5 } from "./obcashaccount5";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObExternalStandingOrderStatus1CodeEnum } from "./obexternalstandingorderstatus1codeenum";
var ObStandingOrder5 = /** @class */ (function (_super) {
    __extends(ObStandingOrder5, _super);
    function ObStandingOrder5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], ObStandingOrder5.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObCashAccount5)
    ], ObStandingOrder5.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentAmount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObStandingOrder5.prototype, "finalPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObStandingOrder5.prototype, "finalPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentAmount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObStandingOrder5.prototype, "firstPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObStandingOrder5.prototype, "firstPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ObStandingOrder5.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastPaymentAmount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObStandingOrder5.prototype, "lastPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObStandingOrder5.prototype, "lastPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextPaymentAmount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObStandingOrder5.prototype, "nextPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObStandingOrder5.prototype, "nextPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObStandingOrder5.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StandingOrderId" }),
        __metadata("design:type", String)
    ], ObStandingOrder5.prototype, "standingOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StandingOrderStatusCode" }),
        __metadata("design:type", String)
    ], ObStandingOrder5.prototype, "standingOrderStatusCode", void 0);
    return ObStandingOrder5;
}(SpeakeasyBase));
export { ObStandingOrder5 };
