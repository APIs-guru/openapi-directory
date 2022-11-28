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
export var GeoRegionTargetingOptionDetailsGeoRegionTypeEnum;
(function (GeoRegionTargetingOptionDetailsGeoRegionTypeEnum) {
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeUnknown"] = "GEO_REGION_TYPE_UNKNOWN";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeOther"] = "GEO_REGION_TYPE_OTHER";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCountry"] = "GEO_REGION_TYPE_COUNTRY";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeRegion"] = "GEO_REGION_TYPE_REGION";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeTerritory"] = "GEO_REGION_TYPE_TERRITORY";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeProvince"] = "GEO_REGION_TYPE_PROVINCE";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeState"] = "GEO_REGION_TYPE_STATE";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypePrefecture"] = "GEO_REGION_TYPE_PREFECTURE";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeGovernorate"] = "GEO_REGION_TYPE_GOVERNORATE";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCanton"] = "GEO_REGION_TYPE_CANTON";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeUnionTerritory"] = "GEO_REGION_TYPE_UNION_TERRITORY";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeAutonomousCommunity"] = "GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeDmaRegion"] = "GEO_REGION_TYPE_DMA_REGION";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeMetro"] = "GEO_REGION_TYPE_METRO";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCongressionalDistrict"] = "GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCounty"] = "GEO_REGION_TYPE_COUNTY";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeMunicipality"] = "GEO_REGION_TYPE_MUNICIPALITY";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCity"] = "GEO_REGION_TYPE_CITY";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypePostalCode"] = "GEO_REGION_TYPE_POSTAL_CODE";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeDepartment"] = "GEO_REGION_TYPE_DEPARTMENT";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeAirport"] = "GEO_REGION_TYPE_AIRPORT";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeTvRegion"] = "GEO_REGION_TYPE_TV_REGION";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeOkrug"] = "GEO_REGION_TYPE_OKRUG";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeBorough"] = "GEO_REGION_TYPE_BOROUGH";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCityRegion"] = "GEO_REGION_TYPE_CITY_REGION";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeArrondissement"] = "GEO_REGION_TYPE_ARRONDISSEMENT";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeNeighborhood"] = "GEO_REGION_TYPE_NEIGHBORHOOD";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeUniversity"] = "GEO_REGION_TYPE_UNIVERSITY";
    GeoRegionTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeDistrict"] = "GEO_REGION_TYPE_DISTRICT";
})(GeoRegionTargetingOptionDetailsGeoRegionTypeEnum || (GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = {}));
// GeoRegionTargetingOptionDetails
/**
 * Represents a targetable geographic region. This will be populated in the geo_region_details field when targeting_type is `TARGETING_TYPE_GEO_REGION`.
**/
var GeoRegionTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(GeoRegionTargetingOptionDetails, _super);
    function GeoRegionTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GeoRegionTargetingOptionDetails.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoRegionType" }),
        __metadata("design:type", String)
    ], GeoRegionTargetingOptionDetails.prototype, "geoRegionType", void 0);
    return GeoRegionTargetingOptionDetails;
}(SpeakeasyBase));
export { GeoRegionTargetingOptionDetails };
