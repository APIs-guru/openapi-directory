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
import { LatLng } from "./latlng";
import { PostalAddress } from "./postaladdress";
export var LocationLocationTypeEnum;
(function (LocationLocationTypeEnum) {
    LocationLocationTypeEnum["LocationTypeUnspecified"] = "LOCATION_TYPE_UNSPECIFIED";
    LocationLocationTypeEnum["Country"] = "COUNTRY";
    LocationLocationTypeEnum["AdministrativeArea"] = "ADMINISTRATIVE_AREA";
    LocationLocationTypeEnum["SubAdministrativeArea"] = "SUB_ADMINISTRATIVE_AREA";
    LocationLocationTypeEnum["Locality"] = "LOCALITY";
    LocationLocationTypeEnum["PostalCode"] = "POSTAL_CODE";
    LocationLocationTypeEnum["SubLocality"] = "SUB_LOCALITY";
    LocationLocationTypeEnum["SubLocality1"] = "SUB_LOCALITY_1";
    LocationLocationTypeEnum["SubLocality2"] = "SUB_LOCALITY_2";
    LocationLocationTypeEnum["Neighborhood"] = "NEIGHBORHOOD";
    LocationLocationTypeEnum["StreetAddress"] = "STREET_ADDRESS";
})(LocationLocationTypeEnum || (LocationLocationTypeEnum = {}));
// Location
/**
 * Output only. A resource that represents a location with full geographic information.
**/
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latLng" }),
        __metadata("design:type", LatLng)
    ], Location.prototype, "latLng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationType" }),
        __metadata("design:type", String)
    ], Location.prototype, "locationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalAddress" }),
        __metadata("design:type", PostalAddress)
    ], Location.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusInMiles" }),
        __metadata("design:type", Number)
    ], Location.prototype, "radiusInMiles", void 0);
    return Location;
}(SpeakeasyBase));
export { Location };
