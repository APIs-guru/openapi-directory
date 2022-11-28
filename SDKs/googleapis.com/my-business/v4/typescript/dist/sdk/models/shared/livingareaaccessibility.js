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
export var LivingAreaAccessibilityAdaCompliantUnitExceptionEnum;
(function (LivingAreaAccessibilityAdaCompliantUnitExceptionEnum) {
    LivingAreaAccessibilityAdaCompliantUnitExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaAccessibilityAdaCompliantUnitExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaAccessibilityAdaCompliantUnitExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaAccessibilityAdaCompliantUnitExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaAccessibilityAdaCompliantUnitExceptionEnum || (LivingAreaAccessibilityAdaCompliantUnitExceptionEnum = {}));
export var LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum;
(function (LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum) {
    LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum || (LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum = {}));
export var LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum;
(function (LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum) {
    LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum || (LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum = {}));
export var LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum;
(function (LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum) {
    LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum || (LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum = {}));
export var LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum;
(function (LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum) {
    LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum || (LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum = {}));
export var LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum;
(function (LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum) {
    LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum || (LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum = {}));
export var LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum;
(function (LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum) {
    LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum || (LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum = {}));
export var LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum;
(function (LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum) {
    LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum || (LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum = {}));
// LivingAreaAccessibility
/**
 * Accessibility features of the living area.
**/
var LivingAreaAccessibility = /** @class */ (function (_super) {
    __extends(LivingAreaAccessibility, _super);
    function LivingAreaAccessibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adaCompliantUnit" }),
        __metadata("design:type", Boolean)
    ], LivingAreaAccessibility.prototype, "adaCompliantUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adaCompliantUnitException" }),
        __metadata("design:type", String)
    ], LivingAreaAccessibility.prototype, "adaCompliantUnitException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hearingAccessibleDoorbell" }),
        __metadata("design:type", Boolean)
    ], LivingAreaAccessibility.prototype, "hearingAccessibleDoorbell", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hearingAccessibleDoorbellException" }),
        __metadata("design:type", String)
    ], LivingAreaAccessibility.prototype, "hearingAccessibleDoorbellException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hearingAccessibleFireAlarm" }),
        __metadata("design:type", Boolean)
    ], LivingAreaAccessibility.prototype, "hearingAccessibleFireAlarm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hearingAccessibleFireAlarmException" }),
        __metadata("design:type", String)
    ], LivingAreaAccessibility.prototype, "hearingAccessibleFireAlarmException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hearingAccessibleUnit" }),
        __metadata("design:type", Boolean)
    ], LivingAreaAccessibility.prototype, "hearingAccessibleUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hearingAccessibleUnitException" }),
        __metadata("design:type", String)
    ], LivingAreaAccessibility.prototype, "hearingAccessibleUnitException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilityAccessibleBathtub" }),
        __metadata("design:type", Boolean)
    ], LivingAreaAccessibility.prototype, "mobilityAccessibleBathtub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilityAccessibleBathtubException" }),
        __metadata("design:type", String)
    ], LivingAreaAccessibility.prototype, "mobilityAccessibleBathtubException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilityAccessibleShower" }),
        __metadata("design:type", Boolean)
    ], LivingAreaAccessibility.prototype, "mobilityAccessibleShower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilityAccessibleShowerException" }),
        __metadata("design:type", String)
    ], LivingAreaAccessibility.prototype, "mobilityAccessibleShowerException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilityAccessibleToilet" }),
        __metadata("design:type", Boolean)
    ], LivingAreaAccessibility.prototype, "mobilityAccessibleToilet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilityAccessibleToiletException" }),
        __metadata("design:type", String)
    ], LivingAreaAccessibility.prototype, "mobilityAccessibleToiletException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilityAccessibleUnit" }),
        __metadata("design:type", Boolean)
    ], LivingAreaAccessibility.prototype, "mobilityAccessibleUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobilityAccessibleUnitException" }),
        __metadata("design:type", String)
    ], LivingAreaAccessibility.prototype, "mobilityAccessibleUnitException", void 0);
    return LivingAreaAccessibility;
}(SpeakeasyBase));
export { LivingAreaAccessibility };
