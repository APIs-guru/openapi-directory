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
import { LivingArea } from "./livingarea";
import { ViewsFromUnit } from "./viewsfromunit";
export var GuestUnitFeaturesBungalowOrVillaExceptionEnum;
(function (GuestUnitFeaturesBungalowOrVillaExceptionEnum) {
    GuestUnitFeaturesBungalowOrVillaExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    GuestUnitFeaturesBungalowOrVillaExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    GuestUnitFeaturesBungalowOrVillaExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    GuestUnitFeaturesBungalowOrVillaExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(GuestUnitFeaturesBungalowOrVillaExceptionEnum || (GuestUnitFeaturesBungalowOrVillaExceptionEnum = {}));
export var GuestUnitFeaturesConnectingUnitAvailableExceptionEnum;
(function (GuestUnitFeaturesConnectingUnitAvailableExceptionEnum) {
    GuestUnitFeaturesConnectingUnitAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    GuestUnitFeaturesConnectingUnitAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    GuestUnitFeaturesConnectingUnitAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    GuestUnitFeaturesConnectingUnitAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(GuestUnitFeaturesConnectingUnitAvailableExceptionEnum || (GuestUnitFeaturesConnectingUnitAvailableExceptionEnum = {}));
export var GuestUnitFeaturesExecutiveFloorExceptionEnum;
(function (GuestUnitFeaturesExecutiveFloorExceptionEnum) {
    GuestUnitFeaturesExecutiveFloorExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    GuestUnitFeaturesExecutiveFloorExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    GuestUnitFeaturesExecutiveFloorExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    GuestUnitFeaturesExecutiveFloorExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(GuestUnitFeaturesExecutiveFloorExceptionEnum || (GuestUnitFeaturesExecutiveFloorExceptionEnum = {}));
export var GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum;
(function (GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum) {
    GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum || (GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum = {}));
export var GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum;
(function (GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum) {
    GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum || (GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum = {}));
export var GuestUnitFeaturesMaxOccupantsCountExceptionEnum;
(function (GuestUnitFeaturesMaxOccupantsCountExceptionEnum) {
    GuestUnitFeaturesMaxOccupantsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    GuestUnitFeaturesMaxOccupantsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    GuestUnitFeaturesMaxOccupantsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    GuestUnitFeaturesMaxOccupantsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(GuestUnitFeaturesMaxOccupantsCountExceptionEnum || (GuestUnitFeaturesMaxOccupantsCountExceptionEnum = {}));
export var GuestUnitFeaturesPrivateHomeExceptionEnum;
(function (GuestUnitFeaturesPrivateHomeExceptionEnum) {
    GuestUnitFeaturesPrivateHomeExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    GuestUnitFeaturesPrivateHomeExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    GuestUnitFeaturesPrivateHomeExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    GuestUnitFeaturesPrivateHomeExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(GuestUnitFeaturesPrivateHomeExceptionEnum || (GuestUnitFeaturesPrivateHomeExceptionEnum = {}));
export var GuestUnitFeaturesSuiteExceptionEnum;
(function (GuestUnitFeaturesSuiteExceptionEnum) {
    GuestUnitFeaturesSuiteExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    GuestUnitFeaturesSuiteExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    GuestUnitFeaturesSuiteExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    GuestUnitFeaturesSuiteExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(GuestUnitFeaturesSuiteExceptionEnum || (GuestUnitFeaturesSuiteExceptionEnum = {}));
export var GuestUnitFeaturesTierEnum;
(function (GuestUnitFeaturesTierEnum) {
    GuestUnitFeaturesTierEnum["UnitTierUnspecified"] = "UNIT_TIER_UNSPECIFIED";
    GuestUnitFeaturesTierEnum["StandardUnit"] = "STANDARD_UNIT";
    GuestUnitFeaturesTierEnum["DeluxeUnit"] = "DELUXE_UNIT";
})(GuestUnitFeaturesTierEnum || (GuestUnitFeaturesTierEnum = {}));
export var GuestUnitFeaturesTierExceptionEnum;
(function (GuestUnitFeaturesTierExceptionEnum) {
    GuestUnitFeaturesTierExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    GuestUnitFeaturesTierExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    GuestUnitFeaturesTierExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    GuestUnitFeaturesTierExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(GuestUnitFeaturesTierExceptionEnum || (GuestUnitFeaturesTierExceptionEnum = {}));
// GuestUnitFeatures
/**
 * Features and available amenities in the guest unit.
**/
var GuestUnitFeatures = /** @class */ (function (_super) {
    __extends(GuestUnitFeatures, _super);
    function GuestUnitFeatures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bungalowOrVilla" }),
        __metadata("design:type", Boolean)
    ], GuestUnitFeatures.prototype, "bungalowOrVilla", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bungalowOrVillaException" }),
        __metadata("design:type", String)
    ], GuestUnitFeatures.prototype, "bungalowOrVillaException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectingUnitAvailable" }),
        __metadata("design:type", Boolean)
    ], GuestUnitFeatures.prototype, "connectingUnitAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectingUnitAvailableException" }),
        __metadata("design:type", String)
    ], GuestUnitFeatures.prototype, "connectingUnitAvailableException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executiveFloor" }),
        __metadata("design:type", Boolean)
    ], GuestUnitFeatures.prototype, "executiveFloor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executiveFloorException" }),
        __metadata("design:type", String)
    ], GuestUnitFeatures.prototype, "executiveFloorException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAdultOccupantsCount" }),
        __metadata("design:type", Number)
    ], GuestUnitFeatures.prototype, "maxAdultOccupantsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAdultOccupantsCountException" }),
        __metadata("design:type", String)
    ], GuestUnitFeatures.prototype, "maxAdultOccupantsCountException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxChildOccupantsCount" }),
        __metadata("design:type", Number)
    ], GuestUnitFeatures.prototype, "maxChildOccupantsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxChildOccupantsCountException" }),
        __metadata("design:type", String)
    ], GuestUnitFeatures.prototype, "maxChildOccupantsCountException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxOccupantsCount" }),
        __metadata("design:type", Number)
    ], GuestUnitFeatures.prototype, "maxOccupantsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxOccupantsCountException" }),
        __metadata("design:type", String)
    ], GuestUnitFeatures.prototype, "maxOccupantsCountException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateHome" }),
        __metadata("design:type", Boolean)
    ], GuestUnitFeatures.prototype, "privateHome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateHomeException" }),
        __metadata("design:type", String)
    ], GuestUnitFeatures.prototype, "privateHomeException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suite" }),
        __metadata("design:type", Boolean)
    ], GuestUnitFeatures.prototype, "suite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suiteException" }),
        __metadata("design:type", String)
    ], GuestUnitFeatures.prototype, "suiteException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], GuestUnitFeatures.prototype, "tier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tierException" }),
        __metadata("design:type", String)
    ], GuestUnitFeatures.prototype, "tierException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalLivingAreas" }),
        __metadata("design:type", LivingArea)
    ], GuestUnitFeatures.prototype, "totalLivingAreas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=views" }),
        __metadata("design:type", ViewsFromUnit)
    ], GuestUnitFeatures.prototype, "views", void 0);
    return GuestUnitFeatures;
}(SpeakeasyBase));
export { GuestUnitFeatures };
