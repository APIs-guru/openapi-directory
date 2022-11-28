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
import { ObCashAccount51 } from "./obcashaccount51";
import { ObBranchAndFinancialInstitutionIdentification51 } from "./obbranchandfinancialinstitutionidentification51";
import { ObActiveOrHistoricCurrencyAndAmount1 } from "./obactiveorhistoriccurrencyandamount1";
import { ObExternalScheduleType1CodeEnum } from "./obexternalscheduletype1codeenum";
var ObScheduledPayment3 = /** @class */ (function (_super) {
    __extends(ObScheduledPayment3, _super);
    function ObScheduledPayment3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], ObScheduledPayment3.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObCashAccount51)
    ], ObScheduledPayment3.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObBranchAndFinancialInstitutionIdentification51)
    ], ObScheduledPayment3.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorReference" }),
        __metadata("design:type", String)
    ], ObScheduledPayment3.prototype, "debtorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount1)
    ], ObScheduledPayment3.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObScheduledPayment3.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObScheduledPayment3.prototype, "scheduledPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledPaymentId" }),
        __metadata("design:type", String)
    ], ObScheduledPayment3.prototype, "scheduledPaymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledType" }),
        __metadata("design:type", String)
    ], ObScheduledPayment3.prototype, "scheduledType", void 0);
    return ObScheduledPayment3;
}(SpeakeasyBase));
export { ObScheduledPayment3 };
