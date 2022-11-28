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
export var PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum;
(function (PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum) {
    PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum || (PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum = {}));
export var PhysicalDistancingPhysicalDistancingRequiredExceptionEnum;
(function (PhysicalDistancingPhysicalDistancingRequiredExceptionEnum) {
    PhysicalDistancingPhysicalDistancingRequiredExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PhysicalDistancingPhysicalDistancingRequiredExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PhysicalDistancingPhysicalDistancingRequiredExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PhysicalDistancingPhysicalDistancingRequiredExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PhysicalDistancingPhysicalDistancingRequiredExceptionEnum || (PhysicalDistancingPhysicalDistancingRequiredExceptionEnum = {}));
export var PhysicalDistancingSafetyDividersExceptionEnum;
(function (PhysicalDistancingSafetyDividersExceptionEnum) {
    PhysicalDistancingSafetyDividersExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PhysicalDistancingSafetyDividersExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PhysicalDistancingSafetyDividersExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PhysicalDistancingSafetyDividersExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PhysicalDistancingSafetyDividersExceptionEnum || (PhysicalDistancingSafetyDividersExceptionEnum = {}));
export var PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum;
(function (PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum) {
    PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum || (PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum = {}));
export var PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum;
(function (PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum) {
    PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum || (PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum = {}));
// PhysicalDistancing
/**
 * Physical distancing measures implemented by the hotel during COVID-19.
**/
var PhysicalDistancing = /** @class */ (function (_super) {
    __extends(PhysicalDistancing, _super);
    function PhysicalDistancing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonAreasPhysicalDistancingArranged" }),
        __metadata("design:type", Boolean)
    ], PhysicalDistancing.prototype, "commonAreasPhysicalDistancingArranged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonAreasPhysicalDistancingArrangedException" }),
        __metadata("design:type", String)
    ], PhysicalDistancing.prototype, "commonAreasPhysicalDistancingArrangedException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=physicalDistancingRequired" }),
        __metadata("design:type", Boolean)
    ], PhysicalDistancing.prototype, "physicalDistancingRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=physicalDistancingRequiredException" }),
        __metadata("design:type", String)
    ], PhysicalDistancing.prototype, "physicalDistancingRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safetyDividers" }),
        __metadata("design:type", Boolean)
    ], PhysicalDistancing.prototype, "safetyDividers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safetyDividersException" }),
        __metadata("design:type", String)
    ], PhysicalDistancing.prototype, "safetyDividersException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedAreasLimitedOccupancy" }),
        __metadata("design:type", Boolean)
    ], PhysicalDistancing.prototype, "sharedAreasLimitedOccupancy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedAreasLimitedOccupancyException" }),
        __metadata("design:type", String)
    ], PhysicalDistancing.prototype, "sharedAreasLimitedOccupancyException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wellnessAreasHavePrivateSpaces" }),
        __metadata("design:type", Boolean)
    ], PhysicalDistancing.prototype, "wellnessAreasHavePrivateSpaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wellnessAreasHavePrivateSpacesException" }),
        __metadata("design:type", String)
    ], PhysicalDistancing.prototype, "wellnessAreasHavePrivateSpacesException", void 0);
    return PhysicalDistancing;
}(SpeakeasyBase));
export { PhysicalDistancing };
