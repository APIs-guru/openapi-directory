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
// ObWriteFile2DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteFile2DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteFile2DataInitiationDebtorAccount, _super);
    function ObWriteFile2DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteFile2DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteFile2DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteFile2DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteFile2DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteFile2DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteFile2DataInitiationDebtorAccount };
// ObWriteFile2DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteFile2DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteFile2DataInitiationRemittanceInformation, _super);
    function ObWriteFile2DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteFile2DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteFile2DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteFile2DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteFile2DataInitiationRemittanceInformation };
// ObWriteFile2DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
var ObWriteFile2DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteFile2DataInitiation, _super);
    function ObWriteFile2DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ControlSum" }),
        __metadata("design:type", Number)
    ], ObWriteFile2DataInitiation.prototype, "controlSum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteFile2DataInitiationDebtorAccount)
    ], ObWriteFile2DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileHash" }),
        __metadata("design:type", String)
    ], ObWriteFile2DataInitiation.prototype, "fileHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileReference" }),
        __metadata("design:type", String)
    ], ObWriteFile2DataInitiation.prototype, "fileReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileType" }),
        __metadata("design:type", String)
    ], ObWriteFile2DataInitiation.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteFile2DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfTransactions" }),
        __metadata("design:type", String)
    ], ObWriteFile2DataInitiation.prototype, "numberOfTransactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteFile2DataInitiationRemittanceInformation)
    ], ObWriteFile2DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFile2DataInitiation.prototype, "requestedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteFile2DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteFile2DataInitiation;
}(SpeakeasyBase));
export { ObWriteFile2DataInitiation };
var ObWriteFile2Data = /** @class */ (function (_super) {
    __extends(ObWriteFile2Data, _super);
    function ObWriteFile2Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteFile2Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteFile2DataInitiation)
    ], ObWriteFile2Data.prototype, "initiation", void 0);
    return ObWriteFile2Data;
}(SpeakeasyBase));
export { ObWriteFile2Data };
var ObWriteFile2 = /** @class */ (function (_super) {
    __extends(ObWriteFile2, _super);
    function ObWriteFile2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteFile2Data)
    ], ObWriteFile2.prototype, "data", void 0);
    return ObWriteFile2;
}(SpeakeasyBase));
export { ObWriteFile2 };
