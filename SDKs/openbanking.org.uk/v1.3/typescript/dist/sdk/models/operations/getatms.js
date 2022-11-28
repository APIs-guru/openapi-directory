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
var GetAtmsHeaders = /** @class */ (function (_super) {
    __extends(GetAtmsHeaders, _super);
    function GetAtmsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetAtmsHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetAtmsHeaders.prototype, "ifNoneMatch", void 0);
    return GetAtmsHeaders;
}(SpeakeasyBase));
export { GetAtmsHeaders };
export var GetAtms400ErrorObjectDescriptionEnum;
(function (GetAtms400ErrorObjectDescriptionEnum) {
    GetAtms400ErrorObjectDescriptionEnum["YouHaveSentARequestWhichCouldNotBeUnderstood"] = "You have sent a request which could not be understood.";
})(GetAtms400ErrorObjectDescriptionEnum || (GetAtms400ErrorObjectDescriptionEnum = {}));
export var GetAtms400ErrorObjectStatusEnum;
(function (GetAtms400ErrorObjectStatusEnum) {
    GetAtms400ErrorObjectStatusEnum["FourHundred"] = "400";
})(GetAtms400ErrorObjectStatusEnum || (GetAtms400ErrorObjectStatusEnum = {}));
export var GetAtms400ErrorObjectTitleEnum;
(function (GetAtms400ErrorObjectTitleEnum) {
    GetAtms400ErrorObjectTitleEnum["BadRequest"] = "Bad request";
})(GetAtms400ErrorObjectTitleEnum || (GetAtms400ErrorObjectTitleEnum = {}));
var GetAtms400ErrorObject = /** @class */ (function (_super) {
    __extends(GetAtms400ErrorObject, _super);
    function GetAtms400ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetAtms400ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetAtms400ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetAtms400ErrorObject.prototype, "title", void 0);
    return GetAtms400ErrorObject;
}(SpeakeasyBase));
export { GetAtms400ErrorObject };
export var GetAtms408ErrorObjectDescriptionEnum;
(function (GetAtms408ErrorObjectDescriptionEnum) {
    GetAtms408ErrorObjectDescriptionEnum["YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred"] = "Your client has failed to submit a request, and a timeout has occurred.";
})(GetAtms408ErrorObjectDescriptionEnum || (GetAtms408ErrorObjectDescriptionEnum = {}));
export var GetAtms408ErrorObjectStatusEnum;
(function (GetAtms408ErrorObjectStatusEnum) {
    GetAtms408ErrorObjectStatusEnum["FourHundredAndEight"] = "408";
})(GetAtms408ErrorObjectStatusEnum || (GetAtms408ErrorObjectStatusEnum = {}));
export var GetAtms408ErrorObjectTitleEnum;
(function (GetAtms408ErrorObjectTitleEnum) {
    GetAtms408ErrorObjectTitleEnum["ClientTimeout"] = "Client timeout";
})(GetAtms408ErrorObjectTitleEnum || (GetAtms408ErrorObjectTitleEnum = {}));
var GetAtms408ErrorObject = /** @class */ (function (_super) {
    __extends(GetAtms408ErrorObject, _super);
    function GetAtms408ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetAtms408ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetAtms408ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetAtms408ErrorObject.prototype, "title", void 0);
    return GetAtms408ErrorObject;
}(SpeakeasyBase));
export { GetAtms408ErrorObject };
export var GetAtms429ErrorObjectDescriptionEnum;
(function (GetAtms429ErrorObjectDescriptionEnum) {
    GetAtms429ErrorObjectDescriptionEnum["YouHaveRequestedThisResourceTooOftenSlowDown"] = "You have requested this resource too often. Slow down.";
})(GetAtms429ErrorObjectDescriptionEnum || (GetAtms429ErrorObjectDescriptionEnum = {}));
export var GetAtms429ErrorObjectStatusEnum;
(function (GetAtms429ErrorObjectStatusEnum) {
    GetAtms429ErrorObjectStatusEnum["FourHundredAndTwentyNine"] = "429";
})(GetAtms429ErrorObjectStatusEnum || (GetAtms429ErrorObjectStatusEnum = {}));
export var GetAtms429ErrorObjectTitleEnum;
(function (GetAtms429ErrorObjectTitleEnum) {
    GetAtms429ErrorObjectTitleEnum["TooManyRequests"] = "Too many requests";
})(GetAtms429ErrorObjectTitleEnum || (GetAtms429ErrorObjectTitleEnum = {}));
var GetAtms429ErrorObject = /** @class */ (function (_super) {
    __extends(GetAtms429ErrorObject, _super);
    function GetAtms429ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetAtms429ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetAtms429ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetAtms429ErrorObject.prototype, "title", void 0);
    return GetAtms429ErrorObject;
}(SpeakeasyBase));
export { GetAtms429ErrorObject };
export var GetAtms500ErrorObjectDescriptionEnum;
(function (GetAtms500ErrorObjectDescriptionEnum) {
    GetAtms500ErrorObjectDescriptionEnum["AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable"] = "An error occurred on the server. No further information is available.";
})(GetAtms500ErrorObjectDescriptionEnum || (GetAtms500ErrorObjectDescriptionEnum = {}));
export var GetAtms500ErrorObjectStatusEnum;
(function (GetAtms500ErrorObjectStatusEnum) {
    GetAtms500ErrorObjectStatusEnum["FiveHundred"] = "500";
})(GetAtms500ErrorObjectStatusEnum || (GetAtms500ErrorObjectStatusEnum = {}));
export var GetAtms500ErrorObjectTitleEnum;
(function (GetAtms500ErrorObjectTitleEnum) {
    GetAtms500ErrorObjectTitleEnum["InternalServerError"] = "Internal server error";
})(GetAtms500ErrorObjectTitleEnum || (GetAtms500ErrorObjectTitleEnum = {}));
var GetAtms500ErrorObject = /** @class */ (function (_super) {
    __extends(GetAtms500ErrorObject, _super);
    function GetAtms500ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetAtms500ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetAtms500ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetAtms500ErrorObject.prototype, "title", void 0);
    return GetAtms500ErrorObject;
}(SpeakeasyBase));
export { GetAtms500ErrorObject };
export var GetAtms503ErrorObjectDescriptionEnum;
(function (GetAtms503ErrorObjectDescriptionEnum) {
    GetAtms503ErrorObjectDescriptionEnum["TheServiceIsTemporarilyUnavailable"] = "The service is temporarily unavailable.";
})(GetAtms503ErrorObjectDescriptionEnum || (GetAtms503ErrorObjectDescriptionEnum = {}));
export var GetAtms503ErrorObjectStatusEnum;
(function (GetAtms503ErrorObjectStatusEnum) {
    GetAtms503ErrorObjectStatusEnum["FiveHundredAndThree"] = "503";
})(GetAtms503ErrorObjectStatusEnum || (GetAtms503ErrorObjectStatusEnum = {}));
export var GetAtms503ErrorObjectTitleEnum;
(function (GetAtms503ErrorObjectTitleEnum) {
    GetAtms503ErrorObjectTitleEnum["ServiceTemporarilyUnavailable"] = "Service temporarily unavailable";
})(GetAtms503ErrorObjectTitleEnum || (GetAtms503ErrorObjectTitleEnum = {}));
var GetAtms503ErrorObject = /** @class */ (function (_super) {
    __extends(GetAtms503ErrorObject, _super);
    function GetAtms503ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetAtms503ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetAtms503ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetAtms503ErrorObject.prototype, "title", void 0);
    return GetAtms503ErrorObject;
}(SpeakeasyBase));
export { GetAtms503ErrorObject };
var GetAtmsErrorObject = /** @class */ (function (_super) {
    __extends(GetAtmsErrorObject, _super);
    function GetAtmsErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetAtmsErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetAtmsErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetAtmsErrorObject.prototype, "title", void 0);
    return GetAtmsErrorObject;
}(SpeakeasyBase));
export { GetAtmsErrorObject };
export var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum;
(function (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum) {
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["Balance"] = "Balance";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["BillPayments"] = "BillPayments";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["CashDeposits"] = "CashDeposits";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["CashWithdrawal"] = "CashWithdrawal";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["CharityDonation"] = "CharityDonation";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["ChequeBookRequest"] = "ChequeBookRequest";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["ChequeDeposits"] = "ChequeDeposits";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["FastCash"] = "FastCash";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["MiniStatement"] = "MiniStatement";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["MobileBankingRegistration"] = "MobileBankingRegistration";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["MobilePaymentRegistration"] = "MobilePaymentRegistration";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["MobilePhoneTopUp"] = "MobilePhoneTopUp";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["OrderStatement"] = "OrderStatement";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["PinActivation"] = "PINActivation";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum["PinChange"] = "PINChange";
})(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum || (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum = {}));
export var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum;
(function (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum) {
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum["AudioCashMachine"] = "AudioCashMachine";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum["AutomaticDoors"] = "AutomaticDoors";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum["ChairAccess"] = "ChairAccess";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum["DriveThru"] = "DriveThru";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum["ExternalRamp"] = "ExternalRamp";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum["InductionLoop"] = "InductionLoop";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum["InternalRamp"] = "InternalRamp";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum["LevelAccess"] = "LevelAccess";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum["LowerLevelCounter"] = "LowerLevelCounter";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum["WheelchairAccess"] = "WheelchairAccess";
})(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum || (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum = {}));
// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress
/**
 * Postal Address
**/
var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress = /** @class */ (function (_super) {
    __extends(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress, _super);
    function GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BuildingNumberOrName" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress.prototype, "buildingNumberOrName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CountrySubDivision" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress.prototype, "countrySubDivision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OptionalAddressField" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress.prototype, "optionalAddressField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostCode" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress.prototype, "postCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreetName" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress.prototype, "streetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TownName" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress.prototype, "townName", void 0);
    return GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress;
}(SpeakeasyBase));
export { GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress };
// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation
/**
 * Geographic Coordinates
**/
var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation = /** @class */ (function (_super) {
    __extends(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation, _super);
    function GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Latitude" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Longitude" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation.prototype, "longitude", void 0);
    return GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation;
}(SpeakeasyBase));
export { GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation };
export var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum;
(function (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum) {
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["Airport"] = "Airport";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["BankSpecialisedOutlet"] = "BankSpecialisedOutlet";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["BranchExternal"] = "BranchExternal";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["BranchInternal"] = "BranchInternal";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["BranchLobby"] = "BranchLobby";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["BureauDeChange"] = "BureauDeChange";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["CoachStation"] = "CoachStation";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["CommercialSpaceInternal"] = "CommercialSpaceInternal";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["ConvenienceStore"] = "ConvenienceStore";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["ExhibitionCentre"] = "ExhibitionCentre";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["FactoryOrOffice"] = "FactoryOrOffice";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["FillingStation"] = "FillingStation";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["FinancialInstitution"] = "FinancialInstitution";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["GovernmentOffice"] = "GovernmentOffice";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["Hospital"] = "Hospital";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["Hotel"] = "Hotel";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["KioskPod"] = "KioskPod";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["LeisureCentre"] = "LeisureCentre";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["PleasurePark"] = "PleasurePark";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["PublicHouse"] = "PublicHouse";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["RailwayStation"] = "RailwayStation";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["RemoteUnit"] = "RemoteUnit";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["RetailerDepartmentStore"] = "RetailerDepartmentStore";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["RetailerOutlet"] = "RetailerOutlet";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["SeaportTerminal"] = "SeaportTerminal";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["ServiceStation"] = "ServiceStation";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["ShoppingCentreExternal"] = "ShoppingCentreExternal";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["ShoppingCentreInternal"] = "ShoppingCentreInternal";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["StorageDepot"] = "StorageDepot";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["SupermarketExternal"] = "SupermarketExternal";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["SupermarketInternal"] = "SupermarketInternal";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["UndergroundRailwayStation"] = "UndergroundRailwayStation";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum["UniversityOrCollege"] = "UniversityOrCollege";
})(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum || (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum = {}));
export var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum;
(function (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum) {
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum["Pound5"] = "\u00A35";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum["Pound10"] = "\u00A310";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum["Pound20"] = "\u00A320";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum["Pound50"] = "\u00A350";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum["Pound100"] = "\u00A3100";
})(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum || (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum = {}));
export var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum;
(function (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum) {
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum["Uk"] = "UK";
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum["Eu"] = "EU";
})(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum || (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum = {}));
// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand
/**
 * Brand
**/
var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand = /** @class */ (function (_super) {
    __extends(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand, _super);
    function GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrademarkID" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand.prototype, "trademarkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrademarkIPOCode" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand.prototype, "trademarkIpoCode", void 0);
    return GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand;
}(SpeakeasyBase));
export { GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand };
// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName
/**
 * Organisation Name
**/
var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName = /** @class */ (function (_super) {
    __extends(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName, _super);
    function GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LegalName" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName.prototype, "legalName", void 0);
    return GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName;
}(SpeakeasyBase));
export { GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName };
// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation
/**
 * Parent organisation
**/
var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation = /** @class */ (function (_super) {
    __extends(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation, _super);
    function GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BIC" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LEI" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation.prototype, "lei", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganisationName" }),
        __metadata("design:type", GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation.prototype, "organisationName", void 0);
    return GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation;
}(SpeakeasyBase));
export { GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation };
// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation
/**
 * Organisation
**/
var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation = /** @class */ (function (_super) {
    __extends(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation, _super);
    function GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Brand" }),
        __metadata("design:type", GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentOrganisation" }),
        __metadata("design:type", GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation.prototype, "parentOrganisation", void 0);
    return GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation;
}(SpeakeasyBase));
export { GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation };
var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm = /** @class */ (function (_super) {
    __extends(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm, _super);
    function GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ATMID" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "atmid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ATMServices" }),
        __metadata("design:type", Array)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "atmServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessibilityTypes" }),
        __metadata("design:type", Array)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "accessibilityTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalATMServices" }),
        __metadata("design:type", Array)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "additionalAtmServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchIdentification" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "branchIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", Array)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GeographicLocation" }),
        __metadata("design:type", GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "geographicLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocationCategory" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "locationCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumValueDispensed" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "minimumValueDispensed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Organisation" }),
        __metadata("design:type", GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "organisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SiteID" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SiteName" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "siteName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportedLanguages" }),
        __metadata("design:type", Array)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm.prototype, "supportedLanguages", void 0);
    return GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm;
}(SpeakeasyBase));
export { GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm };
export var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
(function (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum) {
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum["UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions"] = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions";
})(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum || (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum = {}));
export var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
(function (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum) {
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum["HttpsWwwOpenbankingOrgUkOpenLicence"] = "https://www.openbanking.org.uk/open-licence";
})(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum || (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum = {}));
export var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
(function (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum) {
    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum["HttpsWwwOpenbankingOrgUkTerms"] = "https://www.openbanking.org.uk/terms";
})(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum || (GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum = {}));
var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData = /** @class */ (function (_super) {
    __extends(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData, _super);
    function GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Agreement" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "agreement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdated" }),
        __metadata("design:type", Date)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=License" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TermsOfUse" }),
        __metadata("design:type", String)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "termsOfUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalResults" }),
        __metadata("design:type", Number)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "totalResults", void 0);
    return GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}(SpeakeasyBase));
export { GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData };
var GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson = /** @class */ (function (_super) {
    __extends(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson, _super);
    function GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm }),
        __metadata("design:type", Array)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData)
    ], GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson.prototype, "meta", void 0);
    return GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson;
}(SpeakeasyBase));
export { GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson };
var GetAtmsRequest = /** @class */ (function (_super) {
    __extends(GetAtmsRequest, _super);
    function GetAtmsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAtmsHeaders)
    ], GetAtmsRequest.prototype, "headers", void 0);
    return GetAtmsRequest;
}(SpeakeasyBase));
export { GetAtmsRequest };
var GetAtmsResponse = /** @class */ (function (_super) {
    __extends(GetAtmsResponse, _super);
    function GetAtmsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAtms400ErrorObject)
    ], GetAtmsResponse.prototype, "fourHundredErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAtms408ErrorObject)
    ], GetAtmsResponse.prototype, "fourHundredAndEightErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAtms429ErrorObject)
    ], GetAtmsResponse.prototype, "fourHundredAndTwentyNineErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAtms500ErrorObject)
    ], GetAtmsResponse.prototype, "fiveHundredErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAtms503ErrorObject)
    ], GetAtmsResponse.prototype, "fiveHundredAndThreeErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAtmsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAtmsErrorObject)
    ], GetAtmsResponse.prototype, "errorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson)
    ], GetAtmsResponse.prototype, "getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAtmsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAtmsResponse.prototype, "statusCode", void 0);
    return GetAtmsResponse;
}(SpeakeasyBase));
export { GetAtmsResponse };
