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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Coordinate } from "./coordinate";
// AirportNames
/**
 * Container for airport names.
**/
var AirportNames = /** @class */ (function (_super) {
    __extends(AirportNames, _super);
    function AirportNames() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Name", elemType: shared.Name }),
        __metadata("design:type", Array)
    ], AirportNames.prototype, "name", void 0);
    return AirportNames;
}(SpeakeasyBase));
export { AirportNames };
// AirportPosition
/**
 * Physical location of an airport. This data section is optional and therefore not always present.
**/
var AirportPosition = /** @class */ (function (_super) {
    __extends(AirportPosition, _super);
    function AirportPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Coordinate" }),
        __metadata("design:type", Coordinate)
    ], AirportPosition.prototype, "coordinate", void 0);
    return AirportPosition;
}(SpeakeasyBase));
export { AirportPosition };
// Airport
/**
 * Array of all available airports or one airport matching the request.
**/
var Airport = /** @class */ (function (_super) {
    __extends(Airport, _super);
    function Airport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AirportCode" }),
        __metadata("design:type", String)
    ], Airport.prototype, "airportCode", void 0);
    __decorate([
        Metadata({ data: "json, name=CityCode" }),
        __metadata("design:type", String)
    ], Airport.prototype, "cityCode", void 0);
    __decorate([
        Metadata({ data: "json, name=CountryCode" }),
        __metadata("design:type", String)
    ], Airport.prototype, "countryCode", void 0);
    __decorate([
        Metadata({ data: "json, name=LocationType" }),
        __metadata("design:type", String)
    ], Airport.prototype, "locationType", void 0);
    __decorate([
        Metadata({ data: "json, name=Names" }),
        __metadata("design:type", AirportNames)
    ], Airport.prototype, "names", void 0);
    __decorate([
        Metadata({ data: "json, name=Position" }),
        __metadata("design:type", AirportPosition)
    ], Airport.prototype, "position", void 0);
    __decorate([
        Metadata({ data: "json, name=TimeZoneId" }),
        __metadata("design:type", String)
    ], Airport.prototype, "timeZoneId", void 0);
    __decorate([
        Metadata({ data: "json, name=UtcOffset" }),
        __metadata("design:type", Number)
    ], Airport.prototype, "utcOffset", void 0);
    return Airport;
}(SpeakeasyBase));
export { Airport };
