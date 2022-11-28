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
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObTransactionCashBalance } from "./obtransactioncashbalance";
import { ObCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
import { ObCashAccount6 } from "./obcashaccount6";
import { ProprietaryBankTransactionCodeStructure1 } from "./proprietarybanktransactioncodestructure1";
import { ObEntryStatus1CodeEnum } from "./obentrystatus1codeenum";
// ObTransaction6
/**
 * Provides further details on an entry in the report.
**/
var ObTransaction6 = /** @class */ (function (_super) {
    __extends(ObTransaction6, _super);
    function ObTransaction6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], ObTransaction6.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObTransaction6.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Balance" }),
        __metadata("design:type", ObTransactionCashBalance)
    ], ObTransaction6.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookingDateTime" }),
        __metadata("design:type", Date)
    ], ObTransaction6.prototype, "bookingDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" }),
        __metadata("design:type", String)
    ], ObTransaction6.prototype, "creditDebitIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObCashAccount6)
    ], ObTransaction6.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObCashAccount6)
    ], ObTransaction6.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProprietaryBankTransactionCode" }),
        __metadata("design:type", ProprietaryBankTransactionCodeStructure1)
    ], ObTransaction6.prototype, "proprietaryBankTransactionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObTransaction6.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransactionInformation" }),
        __metadata("design:type", String)
    ], ObTransaction6.prototype, "transactionInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransactionReference" }),
        __metadata("design:type", String)
    ], ObTransaction6.prototype, "transactionReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValueDateTime" }),
        __metadata("design:type", Date)
    ], ObTransaction6.prototype, "valueDateTime", void 0);
    return ObTransaction6;
}(SpeakeasyBase));
export { ObTransaction6 };
