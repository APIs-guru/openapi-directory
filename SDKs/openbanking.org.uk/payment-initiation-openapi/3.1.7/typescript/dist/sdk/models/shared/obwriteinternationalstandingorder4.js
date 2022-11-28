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
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObRisk1 } from "./obrisk1";
// ObWriteInternationalStandingOrder4DataInitiationCreditor
/**
 * Party to which an amount of money is due.
**/
var ObWriteInternationalStandingOrder4DataInitiationCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrder4DataInitiationCreditor, _super);
    function ObWriteInternationalStandingOrder4DataInitiationCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalStandingOrder4DataInitiationCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalStandingOrder4DataInitiationCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrder4DataInitiationCreditor };
// ObWriteInternationalStandingOrder4DataInitiationCreditorAccount
/**
 * Provides the details to identify the beneficiary account.
**/
var ObWriteInternationalStandingOrder4DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrder4DataInitiationCreditorAccount, _super);
    function ObWriteInternationalStandingOrder4DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalStandingOrder4DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrder4DataInitiationCreditorAccount };
// ObWriteInternationalStandingOrder4DataInitiationCreditorAgent
/**
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
var ObWriteInternationalStandingOrder4DataInitiationCreditorAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrder4DataInitiationCreditorAgent, _super);
    function ObWriteInternationalStandingOrder4DataInitiationCreditorAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationCreditorAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationCreditorAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalStandingOrder4DataInitiationCreditorAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationCreditorAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalStandingOrder4DataInitiationCreditorAgent;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrder4DataInitiationCreditorAgent };
// ObWriteInternationalStandingOrder4DataInitiationDebtorAccount
/**
 * Provides the details to identify the debtor account.
**/
var ObWriteInternationalStandingOrder4DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrder4DataInitiationDebtorAccount, _super);
    function ObWriteInternationalStandingOrder4DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalStandingOrder4DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrder4DataInitiationDebtorAccount };
// ObWriteInternationalStandingOrder4DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteInternationalStandingOrder4DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrder4DataInitiationInstructedAmount, _super);
    function ObWriteInternationalStandingOrder4DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteInternationalStandingOrder4DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrder4DataInitiationInstructedAmount };
// ObWriteInternationalStandingOrder4DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
**/
var ObWriteInternationalStandingOrder4DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrder4DataInitiation, _super);
    function ObWriteInternationalStandingOrder4DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalStandingOrder4DataInitiationCreditor)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "creditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteInternationalStandingOrder4DataInitiationCreditorAccount)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObWriteInternationalStandingOrder4DataInitiationCreditorAgent)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "currencyOfTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteInternationalStandingOrder4DataInitiationDebtorAccount)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "destinationCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "extendedPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "finalPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "firstPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteInternationalStandingOrder4DataInitiationInstructedAmount)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfPayments" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "numberOfPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteInternationalStandingOrder4DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteInternationalStandingOrder4DataInitiation;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrder4DataInitiation };
var ObWriteInternationalStandingOrder4Data = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrder4Data, _super);
    function ObWriteInternationalStandingOrder4Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrder4Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteInternationalStandingOrder4DataInitiation)
    ], ObWriteInternationalStandingOrder4Data.prototype, "initiation", void 0);
    return ObWriteInternationalStandingOrder4Data;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrder4Data };
var ObWriteInternationalStandingOrder4 = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrder4, _super);
    function ObWriteInternationalStandingOrder4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteInternationalStandingOrder4Data)
    ], ObWriteInternationalStandingOrder4.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteInternationalStandingOrder4.prototype, "risk", void 0);
    return ObWriteInternationalStandingOrder4;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrder4 };
