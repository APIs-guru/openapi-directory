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
var UpdateNetworkWirelessSsidHotspot20PathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidHotspot20PathParams, _super);
    function UpdateNetworkWirelessSsidHotspot20PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidHotspot20PathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidHotspot20PathParams.prototype, "number", void 0);
    return UpdateNetworkWirelessSsidHotspot20PathParams;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidHotspot20PathParams };
var UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs, _super);
    function UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mcc" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs.prototype, "mcc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mnc" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs.prototype, "mnc", void 0);
    return UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs };
export var UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum;
(function (UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum) {
    UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum["One"] = "1";
    UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum["Zero"] = "0";
})(UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum || (UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum = {}));
var UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods, _super);
    function UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authenticationTypes" }),
        __metadata("design:type", Map)
    ], UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods.prototype, "authenticationTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods.prototype, "id", void 0);
    return UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods };
var UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms, _super);
    function UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=methods", elemType: UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms.prototype, "methods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=realm" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms.prototype, "realm", void 0);
    return UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms };
export var UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum;
(function (UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum) {
    UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum["PrivateNetwork"] = "Private network";
    UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum["PrivateNetworkWithGuestAccess"] = "Private network with guest access";
    UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum["ChargeablePublicNetwork"] = "Chargeable public network";
    UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum["FreePublicNetwork"] = "Free public network";
    UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum["PersonalDeviceNetwork"] = "Personal device network";
    UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum["EmergencyServicesOnlyNetwork"] = "Emergency services only network";
    UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum["TestOrExperimental"] = "Test or experimental";
    UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum["Wildcard"] = "Wildcard";
})(UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum || (UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = {}));
// UpdateNetworkWirelessSsidHotspot20RequestBodyOperator
/**
 * Operator settings for this SSID
**/
var UpdateNetworkWirelessSsidHotspot20RequestBodyOperator = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidHotspot20RequestBodyOperator, _super);
    function UpdateNetworkWirelessSsidHotspot20RequestBodyOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidHotspot20RequestBodyOperator.prototype, "name", void 0);
    return UpdateNetworkWirelessSsidHotspot20RequestBodyOperator;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidHotspot20RequestBodyOperator };
export var UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum;
(function (UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum) {
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Unspecified"] = "Unspecified";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["UnspecifiedAssembly"] = "Unspecified Assembly";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Arena"] = "Arena";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Stadium"] = "Stadium";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["PassengerTerminal"] = "Passenger Terminal";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Amphitheater"] = "Amphitheater";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["AmusementPark"] = "Amusement Park";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["PlaceOfWorship"] = "Place of Worship";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["ConventionCenter"] = "Convention Center";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Library"] = "Library";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Museum"] = "Museum";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Restaurant"] = "Restaurant";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Theater"] = "Theater";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Bar"] = "Bar";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["CoffeeShop"] = "Coffee Shop";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["ZooOrAquarium"] = "Zoo or Aquarium";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["EmergencyCoordinationCenter"] = "Emergency Coordination Center";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["UnspecifiedBusiness"] = "Unspecified Business";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["DoctorOrDentistOffice"] = "Doctor or Dentist office";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Bank"] = "Bank";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["FireStation"] = "Fire Station";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["PoliceStation"] = "Police Station";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["PostOffice"] = "Post Office";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["ProfessionalOffice"] = "Professional Office";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["ResearchAndDevelopmentFacility"] = "Research and Development Facility";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["AttorneyOffice"] = "Attorney Office";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["UnspecifiedEducational"] = "Unspecified Educational";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["SchoolPrimary"] = "School, Primary";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["SchoolSecondary"] = "School, Secondary";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["UniversityOrCollege"] = "University or College";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["UnspecifiedFactoryAndIndustrial"] = "Unspecified Factory and Industrial";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Factory"] = "Factory";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["UnspecifiedInstitutional"] = "Unspecified Institutional";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Hospital"] = "Hospital";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["LongTermCareFacility"] = "Long-Term Care Facility";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["AlcoholAndDrugRehabilitationCenter"] = "Alcohol and Drug Rehabilitation Center";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["GroupHome"] = "Group Home";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["PrisonOrJail"] = "Prison or Jail";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["UnspecifiedMercantile"] = "Unspecified Mercantile";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["RetailStore"] = "Retail Store";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["GroceryMarket"] = "Grocery Market";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["AutomotiveServiceStation"] = "Automotive Service Station";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["ShoppingMall"] = "Shopping Mall";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["GasStation"] = "Gas Station";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["UnspecifiedResidential"] = "Unspecified Residential";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["PrivateResidence"] = "Private Residence";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["HotelOrMotel"] = "Hotel or Motel";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Dormitory"] = "Dormitory";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["BoardingHouse"] = "Boarding House";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["UnspecifiedStorage"] = "Unspecified Storage";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["UnspecifiedUtilityAndMiscellaneous"] = "Unspecified Utility and Miscellaneous";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["UnspecifiedVehicular"] = "Unspecified Vehicular";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["AutomobileOrTruck"] = "Automobile or Truck";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Airplane"] = "Airplane";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Bus"] = "Bus";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Ferry"] = "Ferry";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["ShipOrBoat"] = "Ship or Boat";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Train"] = "Train";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["MotorBike"] = "Motor Bike";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["UnspecifiedOutdoor"] = "Unspecified Outdoor";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["MuniMeshNetwork"] = "Muni-mesh Network";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["CityPark"] = "City Park";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["RestArea"] = "Rest Area";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["TrafficControl"] = "Traffic Control";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["BusStop"] = "Bus Stop";
    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum["Kiosk"] = "Kiosk";
})(UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum || (UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = {}));
// UpdateNetworkWirelessSsidHotspot20RequestBodyVenue
/**
 * Venue settings for this SSID
**/
var UpdateNetworkWirelessSsidHotspot20RequestBodyVenue = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidHotspot20RequestBodyVenue, _super);
    function UpdateNetworkWirelessSsidHotspot20RequestBodyVenue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidHotspot20RequestBodyVenue.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidHotspot20RequestBodyVenue.prototype, "type", void 0);
    return UpdateNetworkWirelessSsidHotspot20RequestBodyVenue;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidHotspot20RequestBodyVenue };
var UpdateNetworkWirelessSsidHotspot20RequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidHotspot20RequestBody, _super);
    function UpdateNetworkWirelessSsidHotspot20RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domains" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidHotspot20RequestBody.prototype, "domains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidHotspot20RequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mccMncs", elemType: UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidHotspot20RequestBody.prototype, "mccMncs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=naiRealms", elemType: UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidHotspot20RequestBody.prototype, "naiRealms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkAccessType" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidHotspot20RequestBody.prototype, "networkAccessType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", UpdateNetworkWirelessSsidHotspot20RequestBodyOperator)
    ], UpdateNetworkWirelessSsidHotspot20RequestBody.prototype, "operator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roamConsortOis" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidHotspot20RequestBody.prototype, "roamConsortOis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=venue" }),
        __metadata("design:type", UpdateNetworkWirelessSsidHotspot20RequestBodyVenue)
    ], UpdateNetworkWirelessSsidHotspot20RequestBody.prototype, "venue", void 0);
    return UpdateNetworkWirelessSsidHotspot20RequestBody;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidHotspot20RequestBody };
var UpdateNetworkWirelessSsidHotspot20Request = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidHotspot20Request, _super);
    function UpdateNetworkWirelessSsidHotspot20Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkWirelessSsidHotspot20PathParams)
    ], UpdateNetworkWirelessSsidHotspot20Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessSsidHotspot20RequestBody)
    ], UpdateNetworkWirelessSsidHotspot20Request.prototype, "request", void 0);
    return UpdateNetworkWirelessSsidHotspot20Request;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidHotspot20Request };
var UpdateNetworkWirelessSsidHotspot20Response = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidHotspot20Response, _super);
    function UpdateNetworkWirelessSsidHotspot20Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidHotspot20Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidHotspot20Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkWirelessSsidHotspot20Response.prototype, "updateNetworkWirelessSsidHotspot20200ApplicationJsonObject", void 0);
    return UpdateNetworkWirelessSsidHotspot20Response;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidHotspot20Response };
