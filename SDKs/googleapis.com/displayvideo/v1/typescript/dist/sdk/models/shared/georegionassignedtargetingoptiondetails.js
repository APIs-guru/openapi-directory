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
export var GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum;
(function (GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum) {
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeUnknown"] = "GEO_REGION_TYPE_UNKNOWN";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeOther"] = "GEO_REGION_TYPE_OTHER";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCountry"] = "GEO_REGION_TYPE_COUNTRY";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeRegion"] = "GEO_REGION_TYPE_REGION";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeTerritory"] = "GEO_REGION_TYPE_TERRITORY";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeProvince"] = "GEO_REGION_TYPE_PROVINCE";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeState"] = "GEO_REGION_TYPE_STATE";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypePrefecture"] = "GEO_REGION_TYPE_PREFECTURE";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeGovernorate"] = "GEO_REGION_TYPE_GOVERNORATE";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCanton"] = "GEO_REGION_TYPE_CANTON";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeUnionTerritory"] = "GEO_REGION_TYPE_UNION_TERRITORY";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeAutonomousCommunity"] = "GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeDmaRegion"] = "GEO_REGION_TYPE_DMA_REGION";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeMetro"] = "GEO_REGION_TYPE_METRO";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCongressionalDistrict"] = "GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCounty"] = "GEO_REGION_TYPE_COUNTY";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeMunicipality"] = "GEO_REGION_TYPE_MUNICIPALITY";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCity"] = "GEO_REGION_TYPE_CITY";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypePostalCode"] = "GEO_REGION_TYPE_POSTAL_CODE";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeDepartment"] = "GEO_REGION_TYPE_DEPARTMENT";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeAirport"] = "GEO_REGION_TYPE_AIRPORT";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeTvRegion"] = "GEO_REGION_TYPE_TV_REGION";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeOkrug"] = "GEO_REGION_TYPE_OKRUG";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeBorough"] = "GEO_REGION_TYPE_BOROUGH";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCityRegion"] = "GEO_REGION_TYPE_CITY_REGION";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeArrondissement"] = "GEO_REGION_TYPE_ARRONDISSEMENT";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeNeighborhood"] = "GEO_REGION_TYPE_NEIGHBORHOOD";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeUniversity"] = "GEO_REGION_TYPE_UNIVERSITY";
    GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeDistrict"] = "GEO_REGION_TYPE_DISTRICT";
})(GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum || (GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = {}));
// GeoRegionAssignedTargetingOptionDetailsInput
/**
 * Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`.
**/
var GeoRegionAssignedTargetingOptionDetailsInput = /** @class */ (function (_super) {
    __extends(GeoRegionAssignedTargetingOptionDetailsInput, _super);
    function GeoRegionAssignedTargetingOptionDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negative" }),
        __metadata("design:type", Boolean)
    ], GeoRegionAssignedTargetingOptionDetailsInput.prototype, "negative", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], GeoRegionAssignedTargetingOptionDetailsInput.prototype, "targetingOptionId", void 0);
    return GeoRegionAssignedTargetingOptionDetailsInput;
}(SpeakeasyBase));
export { GeoRegionAssignedTargetingOptionDetailsInput };
// GeoRegionAssignedTargetingOptionDetails
/**
 * Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`.
**/
var GeoRegionAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(GeoRegionAssignedTargetingOptionDetails, _super);
    function GeoRegionAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GeoRegionAssignedTargetingOptionDetails.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoRegionType" }),
        __metadata("design:type", String)
    ], GeoRegionAssignedTargetingOptionDetails.prototype, "geoRegionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negative" }),
        __metadata("design:type", Boolean)
    ], GeoRegionAssignedTargetingOptionDetails.prototype, "negative", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], GeoRegionAssignedTargetingOptionDetails.prototype, "targetingOptionId", void 0);
    return GeoRegionAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { GeoRegionAssignedTargetingOptionDetails };
