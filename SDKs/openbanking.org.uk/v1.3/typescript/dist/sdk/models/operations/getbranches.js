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
var GetBranchesHeaders = /** @class */ (function (_super) {
    __extends(GetBranchesHeaders, _super);
    function GetBranchesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetBranchesHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetBranchesHeaders.prototype, "ifNoneMatch", void 0);
    return GetBranchesHeaders;
}(SpeakeasyBase));
export { GetBranchesHeaders };
export var GetBranches400ErrorObjectDescriptionEnum;
(function (GetBranches400ErrorObjectDescriptionEnum) {
    GetBranches400ErrorObjectDescriptionEnum["YouHaveSentARequestWhichCouldNotBeUnderstood"] = "You have sent a request which could not be understood.";
})(GetBranches400ErrorObjectDescriptionEnum || (GetBranches400ErrorObjectDescriptionEnum = {}));
export var GetBranches400ErrorObjectStatusEnum;
(function (GetBranches400ErrorObjectStatusEnum) {
    GetBranches400ErrorObjectStatusEnum["FourHundred"] = "400";
})(GetBranches400ErrorObjectStatusEnum || (GetBranches400ErrorObjectStatusEnum = {}));
export var GetBranches400ErrorObjectTitleEnum;
(function (GetBranches400ErrorObjectTitleEnum) {
    GetBranches400ErrorObjectTitleEnum["BadRequest"] = "Bad request";
})(GetBranches400ErrorObjectTitleEnum || (GetBranches400ErrorObjectTitleEnum = {}));
var GetBranches400ErrorObject = /** @class */ (function (_super) {
    __extends(GetBranches400ErrorObject, _super);
    function GetBranches400ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBranches400ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBranches400ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBranches400ErrorObject.prototype, "title", void 0);
    return GetBranches400ErrorObject;
}(SpeakeasyBase));
export { GetBranches400ErrorObject };
export var GetBranches408ErrorObjectDescriptionEnum;
(function (GetBranches408ErrorObjectDescriptionEnum) {
    GetBranches408ErrorObjectDescriptionEnum["YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred"] = "Your client has failed to submit a request, and a timeout has occurred.";
})(GetBranches408ErrorObjectDescriptionEnum || (GetBranches408ErrorObjectDescriptionEnum = {}));
export var GetBranches408ErrorObjectStatusEnum;
(function (GetBranches408ErrorObjectStatusEnum) {
    GetBranches408ErrorObjectStatusEnum["FourHundredAndEight"] = "408";
})(GetBranches408ErrorObjectStatusEnum || (GetBranches408ErrorObjectStatusEnum = {}));
export var GetBranches408ErrorObjectTitleEnum;
(function (GetBranches408ErrorObjectTitleEnum) {
    GetBranches408ErrorObjectTitleEnum["ClientTimeout"] = "Client timeout";
})(GetBranches408ErrorObjectTitleEnum || (GetBranches408ErrorObjectTitleEnum = {}));
var GetBranches408ErrorObject = /** @class */ (function (_super) {
    __extends(GetBranches408ErrorObject, _super);
    function GetBranches408ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBranches408ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBranches408ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBranches408ErrorObject.prototype, "title", void 0);
    return GetBranches408ErrorObject;
}(SpeakeasyBase));
export { GetBranches408ErrorObject };
export var GetBranches429ErrorObjectDescriptionEnum;
(function (GetBranches429ErrorObjectDescriptionEnum) {
    GetBranches429ErrorObjectDescriptionEnum["YouHaveRequestedThisResourceTooOftenSlowDown"] = "You have requested this resource too often. Slow down.";
})(GetBranches429ErrorObjectDescriptionEnum || (GetBranches429ErrorObjectDescriptionEnum = {}));
export var GetBranches429ErrorObjectStatusEnum;
(function (GetBranches429ErrorObjectStatusEnum) {
    GetBranches429ErrorObjectStatusEnum["FourHundredAndTwentyNine"] = "429";
})(GetBranches429ErrorObjectStatusEnum || (GetBranches429ErrorObjectStatusEnum = {}));
export var GetBranches429ErrorObjectTitleEnum;
(function (GetBranches429ErrorObjectTitleEnum) {
    GetBranches429ErrorObjectTitleEnum["TooManyRequests"] = "Too many requests";
})(GetBranches429ErrorObjectTitleEnum || (GetBranches429ErrorObjectTitleEnum = {}));
var GetBranches429ErrorObject = /** @class */ (function (_super) {
    __extends(GetBranches429ErrorObject, _super);
    function GetBranches429ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBranches429ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBranches429ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBranches429ErrorObject.prototype, "title", void 0);
    return GetBranches429ErrorObject;
}(SpeakeasyBase));
export { GetBranches429ErrorObject };
export var GetBranches500ErrorObjectDescriptionEnum;
(function (GetBranches500ErrorObjectDescriptionEnum) {
    GetBranches500ErrorObjectDescriptionEnum["AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable"] = "An error occurred on the server. No further information is available.";
})(GetBranches500ErrorObjectDescriptionEnum || (GetBranches500ErrorObjectDescriptionEnum = {}));
export var GetBranches500ErrorObjectStatusEnum;
(function (GetBranches500ErrorObjectStatusEnum) {
    GetBranches500ErrorObjectStatusEnum["FiveHundred"] = "500";
})(GetBranches500ErrorObjectStatusEnum || (GetBranches500ErrorObjectStatusEnum = {}));
export var GetBranches500ErrorObjectTitleEnum;
(function (GetBranches500ErrorObjectTitleEnum) {
    GetBranches500ErrorObjectTitleEnum["InternalServerError"] = "Internal server error";
})(GetBranches500ErrorObjectTitleEnum || (GetBranches500ErrorObjectTitleEnum = {}));
var GetBranches500ErrorObject = /** @class */ (function (_super) {
    __extends(GetBranches500ErrorObject, _super);
    function GetBranches500ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBranches500ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBranches500ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBranches500ErrorObject.prototype, "title", void 0);
    return GetBranches500ErrorObject;
}(SpeakeasyBase));
export { GetBranches500ErrorObject };
export var GetBranches503ErrorObjectDescriptionEnum;
(function (GetBranches503ErrorObjectDescriptionEnum) {
    GetBranches503ErrorObjectDescriptionEnum["TheServiceIsTemporarilyUnavailable"] = "The service is temporarily unavailable.";
})(GetBranches503ErrorObjectDescriptionEnum || (GetBranches503ErrorObjectDescriptionEnum = {}));
export var GetBranches503ErrorObjectStatusEnum;
(function (GetBranches503ErrorObjectStatusEnum) {
    GetBranches503ErrorObjectStatusEnum["FiveHundredAndThree"] = "503";
})(GetBranches503ErrorObjectStatusEnum || (GetBranches503ErrorObjectStatusEnum = {}));
export var GetBranches503ErrorObjectTitleEnum;
(function (GetBranches503ErrorObjectTitleEnum) {
    GetBranches503ErrorObjectTitleEnum["ServiceTemporarilyUnavailable"] = "Service temporarily unavailable";
})(GetBranches503ErrorObjectTitleEnum || (GetBranches503ErrorObjectTitleEnum = {}));
var GetBranches503ErrorObject = /** @class */ (function (_super) {
    __extends(GetBranches503ErrorObject, _super);
    function GetBranches503ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBranches503ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBranches503ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBranches503ErrorObject.prototype, "title", void 0);
    return GetBranches503ErrorObject;
}(SpeakeasyBase));
export { GetBranches503ErrorObject };
var GetBranchesErrorObject = /** @class */ (function (_super) {
    __extends(GetBranchesErrorObject, _super);
    function GetBranchesErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBranchesErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBranchesErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBranchesErrorObject.prototype, "title", void 0);
    return GetBranchesErrorObject;
}(SpeakeasyBase));
export { GetBranchesErrorObject };
export var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum;
(function (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum) {
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum["AudioCashMachine"] = "AudioCashMachine";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum["AutomaticDoors"] = "AutomaticDoors";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum["ChairAccess"] = "ChairAccess";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum["DriveThru"] = "DriveThru";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum["ExternalRamp"] = "ExternalRamp";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum["InductionLoop"] = "InductionLoop";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum["InternalRamp"] = "InternalRamp";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum["LevelAccess"] = "LevelAccess";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum["LowerLevelCounter"] = "LowerLevelCounter";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum["WheelchairAccess"] = "WheelchairAccess";
})(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum || (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum = {}));
// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress
/**
 * Postal Address
**/
var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress = /** @class */ (function (_super) {
    __extends(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress, _super);
    function GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BuildingNumberOrName" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress.prototype, "buildingNumberOrName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CountrySubDivision" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress.prototype, "countrySubDivision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OptionalAddressField" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress.prototype, "optionalAddressField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostCode" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress.prototype, "postCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreetName" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress.prototype, "streetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TownName" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress.prototype, "townName", void 0);
    return GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress;
}(SpeakeasyBase));
export { GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress };
// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone
/**
 * Alternative Phone Number
**/
var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone = /** @class */ (function (_super) {
    __extends(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone, _super);
    function GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlternateTelephoneNumber" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone.prototype, "alternateTelephoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlternateTelephoneNumberDescription" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone.prototype, "alternateTelephoneNumberDescription", void 0);
    return GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone;
}(SpeakeasyBase));
export { GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone };
export var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum;
(function (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum) {
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum["BusinessItSupport"] = "BusinessITSupport";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum["CollectionLockers"] = "CollectionLockers";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum["MeetingRooms"] = "MeetingRooms";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum["Parking"] = "Parking";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum["Wifi"] = "Wifi";
})(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum || (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum = {}));
export var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum;
(function (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum) {
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum["BureauDeChange"] = "BureauDeChange";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum["BusinessCounter"] = "BusinessCounter";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum["CardIssuanceFacility"] = "CardIssuanceFacility";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum["CounterServices"] = "CounterServices";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum["DriveThru"] = "DriveThru";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum["MortgageAdvisor"] = "MortgageAdvisor";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum["NightSafe"] = "NightSafe";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum["OnDemandCurrency"] = "OnDemandCurrency";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum["PremierCounter"] = "PremierCounter";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum["VideoBanking"] = "VideoBanking";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum["WheelChairAccess"] = "WheelChairAccess";
})(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum || (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum = {}));
export var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum;
(function (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum) {
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["AccountVerificationService"] = "AccountVerificationService";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["AssistedServiceCounter"] = "AssistedServiceCounter";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["BusinessDepositTerminal"] = "BusinessDepositTerminal";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["CashChequeDepositMachineCoin"] = "CashChequeDepositMachineCoin";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["CashChequeDepositMachineNoCoin"] = "CashChequeDepositMachineNoCoin";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["ExternalAtmAudio"] = "ExternalAtmAudio";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["ExternalAtmNoAudio"] = "ExternalAtmNoAudio";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["ExternalQuickServicePoint"] = "ExternalQuickServicePoint";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["InternalAtmAudio"] = "InternalAtmAudio";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["InternalAtmNoAudio"] = "InternalAtmNoAudio";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["InternalQuickServicePoint"] = "InternalQuickServicePoint";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["LodgementDevice"] = "LodgementDevice";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["OnlineBankingPoint"] = "OnlineBankingPoint";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["QuickDeposit"] = "QuickDeposit";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["SaturdayCounterService"] = "SaturdayCounterService";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["SelfServiceAccountOpening"] = "SelfServiceAccountOpening";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum["StatementPrinter"] = "StatementPrinter";
})(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum || (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum = {}));
export var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum;
(function (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum) {
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum["Physical"] = "Physical";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum["Mobile"] = "Mobile";
})(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum || (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum = {}));
export var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum;
(function (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum) {
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum["Business"] = "Business";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum["Corporate"] = "Corporate";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum["Personal"] = "Personal";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum["Premier"] = "Premier";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum["Private"] = "Private";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum["Select"] = "Select";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum["Sme"] = "SME";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum["Wealth"] = "Wealth";
})(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum || (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum = {}));
// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation
/**
 * Geographic Coordinates
**/
var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation = /** @class */ (function (_super) {
    __extends(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation, _super);
    function GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Latitude" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Longitude" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation.prototype, "longitude", void 0);
    return GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation;
}(SpeakeasyBase));
export { GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation };
export var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum;
(function (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum) {
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum["Monday"] = "Monday";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum["Tuesday"] = "Tuesday";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum["Wednesday"] = "Wednesday";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum["Thursday"] = "Thursday";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum["Friday"] = "Friday";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum["Saturday"] = "Saturday";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum["Sunday"] = "Sunday";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum["PublicAndBankHoliday"] = "Public and Bank Holiday";
})(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum || (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum = {}));
var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes = /** @class */ (function (_super) {
    __extends(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes, _super);
    function GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClosingTime" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes.prototype, "closingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDay" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes.prototype, "openingDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningTime" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes.prototype, "openingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnavailableFinishTime" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes.prototype, "unavailableFinishTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnavailableStartTime" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes.prototype, "unavailableStartTime", void 0);
    return GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes;
}(SpeakeasyBase));
export { GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes };
export var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIpoCodeEnum;
(function (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIpoCodeEnum) {
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIpoCodeEnum["Uk"] = "UK";
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIpoCodeEnum["Eu"] = "EU";
})(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIpoCodeEnum || (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIpoCodeEnum = {}));
// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand
/**
 * Brand
**/
var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand = /** @class */ (function (_super) {
    __extends(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand, _super);
    function GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrademarkID" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand.prototype, "trademarkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrademarkIPOCode" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand.prototype, "trademarkIpoCode", void 0);
    return GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand;
}(SpeakeasyBase));
export { GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand };
// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName
/**
 * Organisation Name
**/
var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName = /** @class */ (function (_super) {
    __extends(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName, _super);
    function GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LegalName" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName.prototype, "legalName", void 0);
    return GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName;
}(SpeakeasyBase));
export { GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName };
// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation
/**
 * Parent organisation
**/
var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation = /** @class */ (function (_super) {
    __extends(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation, _super);
    function GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BIC" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LEI" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation.prototype, "lei", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganisationName" }),
        __metadata("design:type", GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation.prototype, "organisationName", void 0);
    return GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation;
}(SpeakeasyBase));
export { GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation };
// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation
/**
 * Organisation
**/
var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation = /** @class */ (function (_super) {
    __extends(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation, _super);
    function GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Brand" }),
        __metadata("design:type", GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentOrganisation" }),
        __metadata("design:type", GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation.prototype, "parentOrganisation", void 0);
    return GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation;
}(SpeakeasyBase));
export { GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation };
// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure
/**
 * Planned branch closure
**/
var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure = /** @class */ (function (_super) {
    __extends(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure, _super);
    function GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure.prototype, "startDate", void 0);
    return GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure;
}(SpeakeasyBase));
export { GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure };
var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch = /** @class */ (function (_super) {
    __extends(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch, _super);
    function GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ATMAtBranch" }),
        __metadata("design:type", Boolean)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "atmAtBranch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessibilityTypes" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "accessibilityTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlternatePhone", elemType: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone }),
        __metadata("design:type", Array)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "alternatePhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArrivalTime" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "arrivalTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchDescription" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "branchDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchFacilitiesName" }),
        __metadata("design:type", Array)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "branchFacilitiesName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchIdentification" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "branchIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchMediatedServiceName" }),
        __metadata("design:type", Array)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "branchMediatedServiceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchName" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "branchName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchOtherFacilities" }),
        __metadata("design:type", Array)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "branchOtherFacilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchOtherMediatedServices" }),
        __metadata("design:type", Array)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "branchOtherMediatedServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchOtherSelfServices" }),
        __metadata("design:type", Array)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "branchOtherSelfServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchPhoto" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "branchPhoto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchSelfServeServiceName" }),
        __metadata("design:type", Array)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "branchSelfServeServiceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchType" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "branchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerSegment" }),
        __metadata("design:type", Array)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "customerSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DaysOfTheWeek" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "daysOfTheWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DepartureTime" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "departureTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FaxNumber" }),
        __metadata("design:type", Array)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "faxNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GeographicLocation" }),
        __metadata("design:type", GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "geographicLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningTimes", elemType: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes }),
        __metadata("design:type", Array)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "openingTimes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Organisation" }),
        __metadata("design:type", GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "organisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParkingLocation" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "parkingLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlannedBranchClosure", elemType: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure }),
        __metadata("design:type", Array)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "plannedBranchClosure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopName" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "stopName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TelephoneNumber" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch.prototype, "telephoneNumber", void 0);
    return GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch;
}(SpeakeasyBase));
export { GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch };
export var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
(function (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum) {
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum["UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions"] = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions";
})(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum || (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum = {}));
export var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
(function (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum) {
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum["HttpsWwwOpenbankingOrgUkOpenLicence"] = "https://www.openbanking.org.uk/open-licence";
})(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum || (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum = {}));
export var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
(function (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum) {
    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum["HttpsWwwOpenbankingOrgUkTerms"] = "https://www.openbanking.org.uk/terms";
})(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum || (GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum = {}));
var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData = /** @class */ (function (_super) {
    __extends(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData, _super);
    function GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Agreement" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "agreement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdated" }),
        __metadata("design:type", Date)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=License" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TermsOfUse" }),
        __metadata("design:type", String)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "termsOfUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalResults" }),
        __metadata("design:type", Number)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "totalResults", void 0);
    return GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}(SpeakeasyBase));
export { GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData };
var GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson = /** @class */ (function (_super) {
    __extends(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson, _super);
    function GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch }),
        __metadata("design:type", Array)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData)
    ], GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson.prototype, "meta", void 0);
    return GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson;
}(SpeakeasyBase));
export { GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson };
var GetBranchesRequest = /** @class */ (function (_super) {
    __extends(GetBranchesRequest, _super);
    function GetBranchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBranchesHeaders)
    ], GetBranchesRequest.prototype, "headers", void 0);
    return GetBranchesRequest;
}(SpeakeasyBase));
export { GetBranchesRequest };
var GetBranchesResponse = /** @class */ (function (_super) {
    __extends(GetBranchesResponse, _super);
    function GetBranchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBranches400ErrorObject)
    ], GetBranchesResponse.prototype, "fourHundredErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBranches408ErrorObject)
    ], GetBranchesResponse.prototype, "fourHundredAndEightErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBranches429ErrorObject)
    ], GetBranchesResponse.prototype, "fourHundredAndTwentyNineErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBranches500ErrorObject)
    ], GetBranchesResponse.prototype, "fiveHundredErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBranches503ErrorObject)
    ], GetBranchesResponse.prototype, "fiveHundredAndThreeErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBranchesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBranchesErrorObject)
    ], GetBranchesResponse.prototype, "errorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson)
    ], GetBranchesResponse.prototype, "getBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetBranchesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBranchesResponse.prototype, "statusCode", void 0);
    return GetBranchesResponse;
}(SpeakeasyBase));
export { GetBranchesResponse };
