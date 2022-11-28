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
import { DimensionValue } from "./dimensionvalue";
import { CustomViewabilityMetric } from "./customviewabilitymetric";
import { LookbackConfiguration } from "./lookbackconfiguration";
import { OmnitureSettings } from "./omnituresettings";
import { TagSettings } from "./tagsettings";
import { ThirdPartyAuthenticationToken } from "./thirdpartyauthenticationtoken";
import { UserDefinedVariableConfiguration } from "./userdefinedvariableconfiguration";
export var FloodlightConfigurationFirstDayOfWeekEnum;
(function (FloodlightConfigurationFirstDayOfWeekEnum) {
    FloodlightConfigurationFirstDayOfWeekEnum["Monday"] = "MONDAY";
    FloodlightConfigurationFirstDayOfWeekEnum["Sunday"] = "SUNDAY";
})(FloodlightConfigurationFirstDayOfWeekEnum || (FloodlightConfigurationFirstDayOfWeekEnum = {}));
export var FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum;
(function (FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum) {
    FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum["ExcludeNaturalSearchConversionAttribution"] = "EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION";
    FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum["IncludeNaturalSearchConversionAttribution"] = "INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION";
    FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum["IncludeNaturalSearchTieredConversionAttribution"] = "INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION";
})(FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum || (FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum = {}));
// FloodlightConfiguration
/**
 * Contains properties of a Floodlight configuration.
**/
var FloodlightConfiguration = /** @class */ (function (_super) {
    __extends(FloodlightConfiguration, _super);
    function FloodlightConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], FloodlightConfiguration.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], FloodlightConfiguration.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], FloodlightConfiguration.prototype, "advertiserIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analyticsDataSharingEnabled" }),
        __metadata("design:type", Boolean)
    ], FloodlightConfiguration.prototype, "analyticsDataSharingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customViewabilityMetric" }),
        __metadata("design:type", CustomViewabilityMetric)
    ], FloodlightConfiguration.prototype, "customViewabilityMetric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exposureToConversionEnabled" }),
        __metadata("design:type", Boolean)
    ], FloodlightConfiguration.prototype, "exposureToConversionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstDayOfWeek" }),
        __metadata("design:type", String)
    ], FloodlightConfiguration.prototype, "firstDayOfWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FloodlightConfiguration.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], FloodlightConfiguration.prototype, "idDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inAppAttributionTrackingEnabled" }),
        __metadata("design:type", Boolean)
    ], FloodlightConfiguration.prototype, "inAppAttributionTrackingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], FloodlightConfiguration.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lookbackConfiguration" }),
        __metadata("design:type", LookbackConfiguration)
    ], FloodlightConfiguration.prototype, "lookbackConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=naturalSearchConversionAttributionOption" }),
        __metadata("design:type", String)
    ], FloodlightConfiguration.prototype, "naturalSearchConversionAttributionOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=omnitureSettings" }),
        __metadata("design:type", OmnitureSettings)
    ], FloodlightConfiguration.prototype, "omnitureSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], FloodlightConfiguration.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagSettings" }),
        __metadata("design:type", TagSettings)
    ], FloodlightConfiguration.prototype, "tagSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdPartyAuthenticationTokens", elemType: ThirdPartyAuthenticationToken }),
        __metadata("design:type", Array)
    ], FloodlightConfiguration.prototype, "thirdPartyAuthenticationTokens", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDefinedVariableConfigurations", elemType: UserDefinedVariableConfiguration }),
        __metadata("design:type", Array)
    ], FloodlightConfiguration.prototype, "userDefinedVariableConfigurations", void 0);
    return FloodlightConfiguration;
}(SpeakeasyBase));
export { FloodlightConfiguration };
