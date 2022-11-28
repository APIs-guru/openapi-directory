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
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
export var ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum) {
    ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum || (ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteFileConsentResponse4DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteFileConsentResponse4DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteFileConsentResponse4DataAuthorisation, _super);
    function ObWriteFileConsentResponse4DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFileConsentResponse4DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteFileConsentResponse4DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteFileConsentResponse4DataAuthorisation };
// ObWriteFileConsentResponse4DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteFileConsentResponse4DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteFileConsentResponse4DataCharges, _super);
    function ObWriteFileConsentResponse4DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteFileConsentResponse4DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataCharges.prototype, "type", void 0);
    return ObWriteFileConsentResponse4DataCharges;
}(SpeakeasyBase));
export { ObWriteFileConsentResponse4DataCharges };
// ObWriteFileConsentResponse4DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteFileConsentResponse4DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteFileConsentResponse4DataInitiationDebtorAccount, _super);
    function ObWriteFileConsentResponse4DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteFileConsentResponse4DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteFileConsentResponse4DataInitiationDebtorAccount };
// ObWriteFileConsentResponse4DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteFileConsentResponse4DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteFileConsentResponse4DataInitiationRemittanceInformation, _super);
    function ObWriteFileConsentResponse4DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteFileConsentResponse4DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteFileConsentResponse4DataInitiationRemittanceInformation };
// ObWriteFileConsentResponse4DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
var ObWriteFileConsentResponse4DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteFileConsentResponse4DataInitiation, _super);
    function ObWriteFileConsentResponse4DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ControlSum" }),
        __metadata("design:type", Number)
    ], ObWriteFileConsentResponse4DataInitiation.prototype, "controlSum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteFileConsentResponse4DataInitiationDebtorAccount)
    ], ObWriteFileConsentResponse4DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileHash" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataInitiation.prototype, "fileHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileReference" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataInitiation.prototype, "fileReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileType" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataInitiation.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfTransactions" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4DataInitiation.prototype, "numberOfTransactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteFileConsentResponse4DataInitiationRemittanceInformation)
    ], ObWriteFileConsentResponse4DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFileConsentResponse4DataInitiation.prototype, "requestedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteFileConsentResponse4DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteFileConsentResponse4DataInitiation;
}(SpeakeasyBase));
export { ObWriteFileConsentResponse4DataInitiation };
export var ObWriteFileConsentResponse4DataStatusEnum;
(function (ObWriteFileConsentResponse4DataStatusEnum) {
    ObWriteFileConsentResponse4DataStatusEnum["Authorised"] = "Authorised";
    ObWriteFileConsentResponse4DataStatusEnum["AwaitingAuthorisation"] = "AwaitingAuthorisation";
    ObWriteFileConsentResponse4DataStatusEnum["AwaitingUpload"] = "AwaitingUpload";
    ObWriteFileConsentResponse4DataStatusEnum["Consumed"] = "Consumed";
    ObWriteFileConsentResponse4DataStatusEnum["Rejected"] = "Rejected";
})(ObWriteFileConsentResponse4DataStatusEnum || (ObWriteFileConsentResponse4DataStatusEnum = {}));
var ObWriteFileConsentResponse4Data = /** @class */ (function (_super) {
    __extends(ObWriteFileConsentResponse4Data, _super);
    function ObWriteFileConsentResponse4Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteFileConsentResponse4DataAuthorisation)
    ], ObWriteFileConsentResponse4Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteFileConsentResponse4DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteFileConsentResponse4Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFileConsentResponse4Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CutOffDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFileConsentResponse4Data.prototype, "cutOffDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteFileConsentResponse4Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteFileConsentResponse4DataInitiation)
    ], ObWriteFileConsentResponse4Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteFileConsentResponse4Data.prototype, "scaSupportData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteFileConsentResponse4Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteFileConsentResponse4Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteFileConsentResponse4Data;
}(SpeakeasyBase));
export { ObWriteFileConsentResponse4Data };
var ObWriteFileConsentResponse4 = /** @class */ (function (_super) {
    __extends(ObWriteFileConsentResponse4, _super);
    function ObWriteFileConsentResponse4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteFileConsentResponse4Data)
    ], ObWriteFileConsentResponse4.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteFileConsentResponse4.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteFileConsentResponse4.prototype, "meta", void 0);
    return ObWriteFileConsentResponse4;
}(SpeakeasyBase));
export { ObWriteFileConsentResponse4 };
