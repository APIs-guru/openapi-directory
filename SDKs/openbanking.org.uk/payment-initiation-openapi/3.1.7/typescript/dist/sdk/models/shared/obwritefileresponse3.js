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
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { Links } from "./links";
import { Meta } from "./meta";
// ObWriteFileResponse3DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteFileResponse3DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteFileResponse3DataCharges, _super);
    function ObWriteFileResponse3DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteFileResponse3DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataCharges.prototype, "type", void 0);
    return ObWriteFileResponse3DataCharges;
}(SpeakeasyBase));
export { ObWriteFileResponse3DataCharges };
// ObWriteFileResponse3DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteFileResponse3DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteFileResponse3DataInitiationDebtorAccount, _super);
    function ObWriteFileResponse3DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteFileResponse3DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteFileResponse3DataInitiationDebtorAccount };
// ObWriteFileResponse3DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteFileResponse3DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteFileResponse3DataInitiationRemittanceInformation, _super);
    function ObWriteFileResponse3DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteFileResponse3DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteFileResponse3DataInitiationRemittanceInformation };
// ObWriteFileResponse3DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
var ObWriteFileResponse3DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteFileResponse3DataInitiation, _super);
    function ObWriteFileResponse3DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ControlSum" }),
        __metadata("design:type", Number)
    ], ObWriteFileResponse3DataInitiation.prototype, "controlSum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteFileResponse3DataInitiationDebtorAccount)
    ], ObWriteFileResponse3DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileHash" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataInitiation.prototype, "fileHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileReference" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataInitiation.prototype, "fileReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileType" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataInitiation.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfTransactions" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataInitiation.prototype, "numberOfTransactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteFileResponse3DataInitiationRemittanceInformation)
    ], ObWriteFileResponse3DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFileResponse3DataInitiation.prototype, "requestedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteFileResponse3DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteFileResponse3DataInitiation;
}(SpeakeasyBase));
export { ObWriteFileResponse3DataInitiation };
export var ObWriteFileResponse3DataMultiAuthorisationStatusEnum;
(function (ObWriteFileResponse3DataMultiAuthorisationStatusEnum) {
    ObWriteFileResponse3DataMultiAuthorisationStatusEnum["Authorised"] = "Authorised";
    ObWriteFileResponse3DataMultiAuthorisationStatusEnum["AwaitingFurtherAuthorisation"] = "AwaitingFurtherAuthorisation";
    ObWriteFileResponse3DataMultiAuthorisationStatusEnum["Rejected"] = "Rejected";
})(ObWriteFileResponse3DataMultiAuthorisationStatusEnum || (ObWriteFileResponse3DataMultiAuthorisationStatusEnum = {}));
// ObWriteFileResponse3DataMultiAuthorisation
/**
 * The multiple authorisation flow response from the ASPSP.
**/
var ObWriteFileResponse3DataMultiAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteFileResponse3DataMultiAuthorisation, _super);
    function ObWriteFileResponse3DataMultiAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFileResponse3DataMultiAuthorisation.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFileResponse3DataMultiAuthorisation.prototype, "lastUpdateDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberReceived" }),
        __metadata("design:type", Number)
    ], ObWriteFileResponse3DataMultiAuthorisation.prototype, "numberReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberRequired" }),
        __metadata("design:type", Number)
    ], ObWriteFileResponse3DataMultiAuthorisation.prototype, "numberRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3DataMultiAuthorisation.prototype, "status", void 0);
    return ObWriteFileResponse3DataMultiAuthorisation;
}(SpeakeasyBase));
export { ObWriteFileResponse3DataMultiAuthorisation };
export var ObWriteFileResponse3DataStatusEnum;
(function (ObWriteFileResponse3DataStatusEnum) {
    ObWriteFileResponse3DataStatusEnum["InitiationCompleted"] = "InitiationCompleted";
    ObWriteFileResponse3DataStatusEnum["InitiationFailed"] = "InitiationFailed";
    ObWriteFileResponse3DataStatusEnum["InitiationPending"] = "InitiationPending";
})(ObWriteFileResponse3DataStatusEnum || (ObWriteFileResponse3DataStatusEnum = {}));
var ObWriteFileResponse3Data = /** @class */ (function (_super) {
    __extends(ObWriteFileResponse3Data, _super);
    function ObWriteFileResponse3Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteFileResponse3DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteFileResponse3Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFileResponse3Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteFileResponse3Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FilePaymentId" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3Data.prototype, "filePaymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteFileResponse3DataInitiation)
    ], ObWriteFileResponse3Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiAuthorisation" }),
        __metadata("design:type", ObWriteFileResponse3DataMultiAuthorisation)
    ], ObWriteFileResponse3Data.prototype, "multiAuthorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteFileResponse3Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFileResponse3Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteFileResponse3Data;
}(SpeakeasyBase));
export { ObWriteFileResponse3Data };
var ObWriteFileResponse3 = /** @class */ (function (_super) {
    __extends(ObWriteFileResponse3, _super);
    function ObWriteFileResponse3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteFileResponse3Data)
    ], ObWriteFileResponse3.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteFileResponse3.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteFileResponse3.prototype, "meta", void 0);
    return ObWriteFileResponse3;
}(SpeakeasyBase));
export { ObWriteFileResponse3 };
