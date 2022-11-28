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
export var BusinessChainTargetingOptionDetailsGeoRegionTypeEnum;
(function (BusinessChainTargetingOptionDetailsGeoRegionTypeEnum) {
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeUnknown"] = "GEO_REGION_TYPE_UNKNOWN";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeOther"] = "GEO_REGION_TYPE_OTHER";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCountry"] = "GEO_REGION_TYPE_COUNTRY";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeRegion"] = "GEO_REGION_TYPE_REGION";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeTerritory"] = "GEO_REGION_TYPE_TERRITORY";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeProvince"] = "GEO_REGION_TYPE_PROVINCE";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeState"] = "GEO_REGION_TYPE_STATE";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypePrefecture"] = "GEO_REGION_TYPE_PREFECTURE";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeGovernorate"] = "GEO_REGION_TYPE_GOVERNORATE";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCanton"] = "GEO_REGION_TYPE_CANTON";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeUnionTerritory"] = "GEO_REGION_TYPE_UNION_TERRITORY";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeAutonomousCommunity"] = "GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeDmaRegion"] = "GEO_REGION_TYPE_DMA_REGION";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeMetro"] = "GEO_REGION_TYPE_METRO";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCongressionalDistrict"] = "GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCounty"] = "GEO_REGION_TYPE_COUNTY";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeMunicipality"] = "GEO_REGION_TYPE_MUNICIPALITY";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCity"] = "GEO_REGION_TYPE_CITY";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypePostalCode"] = "GEO_REGION_TYPE_POSTAL_CODE";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeDepartment"] = "GEO_REGION_TYPE_DEPARTMENT";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeAirport"] = "GEO_REGION_TYPE_AIRPORT";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeTvRegion"] = "GEO_REGION_TYPE_TV_REGION";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeOkrug"] = "GEO_REGION_TYPE_OKRUG";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeBorough"] = "GEO_REGION_TYPE_BOROUGH";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeCityRegion"] = "GEO_REGION_TYPE_CITY_REGION";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeArrondissement"] = "GEO_REGION_TYPE_ARRONDISSEMENT";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeNeighborhood"] = "GEO_REGION_TYPE_NEIGHBORHOOD";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeUniversity"] = "GEO_REGION_TYPE_UNIVERSITY";
    BusinessChainTargetingOptionDetailsGeoRegionTypeEnum["GeoRegionTypeDistrict"] = "GEO_REGION_TYPE_DISTRICT";
})(BusinessChainTargetingOptionDetailsGeoRegionTypeEnum || (BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = {}));
// BusinessChainTargetingOptionDetails
/**
 * Represents a targetable business chain within a geo region. This will be populated in the business_chain_details field when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
**/
var BusinessChainTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(BusinessChainTargetingOptionDetails, _super);
    function BusinessChainTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessChain" }),
        __metadata("design:type", String)
    ], BusinessChainTargetingOptionDetails.prototype, "businessChain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoRegion" }),
        __metadata("design:type", String)
    ], BusinessChainTargetingOptionDetails.prototype, "geoRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoRegionType" }),
        __metadata("design:type", String)
    ], BusinessChainTargetingOptionDetails.prototype, "geoRegionType", void 0);
    return BusinessChainTargetingOptionDetails;
}(SpeakeasyBase));
export { BusinessChainTargetingOptionDetails };
