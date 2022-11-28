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
import { ObscaSupportData1 } from "./obscasupportdata1";
export var ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum) {
    ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum || (ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteFileConsent3DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteFileConsent3DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteFileConsent3DataAuthorisation, _super);
    function ObWriteFileConsent3DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteFileConsent3DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFileConsent3DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteFileConsent3DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteFileConsent3DataAuthorisation };
// ObWriteFileConsent3DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteFileConsent3DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteFileConsent3DataInitiationDebtorAccount, _super);
    function ObWriteFileConsent3DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteFileConsent3DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteFileConsent3DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteFileConsent3DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteFileConsent3DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteFileConsent3DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteFileConsent3DataInitiationDebtorAccount };
// ObWriteFileConsent3DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteFileConsent3DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteFileConsent3DataInitiationRemittanceInformation, _super);
    function ObWriteFileConsent3DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteFileConsent3DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteFileConsent3DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteFileConsent3DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteFileConsent3DataInitiationRemittanceInformation };
// ObWriteFileConsent3DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
var ObWriteFileConsent3DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteFileConsent3DataInitiation, _super);
    function ObWriteFileConsent3DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ControlSum" }),
        __metadata("design:type", Number)
    ], ObWriteFileConsent3DataInitiation.prototype, "controlSum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteFileConsent3DataInitiationDebtorAccount)
    ], ObWriteFileConsent3DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileHash" }),
        __metadata("design:type", String)
    ], ObWriteFileConsent3DataInitiation.prototype, "fileHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileReference" }),
        __metadata("design:type", String)
    ], ObWriteFileConsent3DataInitiation.prototype, "fileReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileType" }),
        __metadata("design:type", String)
    ], ObWriteFileConsent3DataInitiation.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteFileConsent3DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfTransactions" }),
        __metadata("design:type", String)
    ], ObWriteFileConsent3DataInitiation.prototype, "numberOfTransactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteFileConsent3DataInitiationRemittanceInformation)
    ], ObWriteFileConsent3DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFileConsent3DataInitiation.prototype, "requestedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteFileConsent3DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteFileConsent3DataInitiation;
}(SpeakeasyBase));
export { ObWriteFileConsent3DataInitiation };
var ObWriteFileConsent3Data = /** @class */ (function (_super) {
    __extends(ObWriteFileConsent3Data, _super);
    function ObWriteFileConsent3Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteFileConsent3DataAuthorisation)
    ], ObWriteFileConsent3Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteFileConsent3DataInitiation)
    ], ObWriteFileConsent3Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteFileConsent3Data.prototype, "scaSupportData", void 0);
    return ObWriteFileConsent3Data;
}(SpeakeasyBase));
export { ObWriteFileConsent3Data };
var ObWriteFileConsent3 = /** @class */ (function (_super) {
    __extends(ObWriteFileConsent3, _super);
    function ObWriteFileConsent3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteFileConsent3Data)
    ], ObWriteFileConsent3.prototype, "data", void 0);
    return ObWriteFileConsent3;
}(SpeakeasyBase));
export { ObWriteFileConsent3 };
