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
export var WellnessDoctorOnCallExceptionEnum;
(function (WellnessDoctorOnCallExceptionEnum) {
    WellnessDoctorOnCallExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WellnessDoctorOnCallExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WellnessDoctorOnCallExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WellnessDoctorOnCallExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WellnessDoctorOnCallExceptionEnum || (WellnessDoctorOnCallExceptionEnum = {}));
export var WellnessEllipticalMachineExceptionEnum;
(function (WellnessEllipticalMachineExceptionEnum) {
    WellnessEllipticalMachineExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WellnessEllipticalMachineExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WellnessEllipticalMachineExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WellnessEllipticalMachineExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WellnessEllipticalMachineExceptionEnum || (WellnessEllipticalMachineExceptionEnum = {}));
export var WellnessFitnessCenterExceptionEnum;
(function (WellnessFitnessCenterExceptionEnum) {
    WellnessFitnessCenterExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WellnessFitnessCenterExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WellnessFitnessCenterExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WellnessFitnessCenterExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WellnessFitnessCenterExceptionEnum || (WellnessFitnessCenterExceptionEnum = {}));
export var WellnessFreeFitnessCenterExceptionEnum;
(function (WellnessFreeFitnessCenterExceptionEnum) {
    WellnessFreeFitnessCenterExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WellnessFreeFitnessCenterExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WellnessFreeFitnessCenterExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WellnessFreeFitnessCenterExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WellnessFreeFitnessCenterExceptionEnum || (WellnessFreeFitnessCenterExceptionEnum = {}));
export var WellnessFreeWeightsExceptionEnum;
(function (WellnessFreeWeightsExceptionEnum) {
    WellnessFreeWeightsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WellnessFreeWeightsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WellnessFreeWeightsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WellnessFreeWeightsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WellnessFreeWeightsExceptionEnum || (WellnessFreeWeightsExceptionEnum = {}));
export var WellnessMassageExceptionEnum;
(function (WellnessMassageExceptionEnum) {
    WellnessMassageExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WellnessMassageExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WellnessMassageExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WellnessMassageExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WellnessMassageExceptionEnum || (WellnessMassageExceptionEnum = {}));
export var WellnessSalonExceptionEnum;
(function (WellnessSalonExceptionEnum) {
    WellnessSalonExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WellnessSalonExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WellnessSalonExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WellnessSalonExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WellnessSalonExceptionEnum || (WellnessSalonExceptionEnum = {}));
export var WellnessSaunaExceptionEnum;
(function (WellnessSaunaExceptionEnum) {
    WellnessSaunaExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WellnessSaunaExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WellnessSaunaExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WellnessSaunaExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WellnessSaunaExceptionEnum || (WellnessSaunaExceptionEnum = {}));
export var WellnessSpaExceptionEnum;
(function (WellnessSpaExceptionEnum) {
    WellnessSpaExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WellnessSpaExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WellnessSpaExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WellnessSpaExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WellnessSpaExceptionEnum || (WellnessSpaExceptionEnum = {}));
export var WellnessTreadmillExceptionEnum;
(function (WellnessTreadmillExceptionEnum) {
    WellnessTreadmillExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WellnessTreadmillExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WellnessTreadmillExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WellnessTreadmillExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WellnessTreadmillExceptionEnum || (WellnessTreadmillExceptionEnum = {}));
export var WellnessWeightMachineExceptionEnum;
(function (WellnessWeightMachineExceptionEnum) {
    WellnessWeightMachineExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    WellnessWeightMachineExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    WellnessWeightMachineExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    WellnessWeightMachineExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(WellnessWeightMachineExceptionEnum || (WellnessWeightMachineExceptionEnum = {}));
// Wellness
/**
 * Guest facilities at the property to promote or maintain health, beauty, and fitness.
**/
var Wellness = /** @class */ (function (_super) {
    __extends(Wellness, _super);
    function Wellness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doctorOnCall" }),
        __metadata("design:type", Boolean)
    ], Wellness.prototype, "doctorOnCall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doctorOnCallException" }),
        __metadata("design:type", String)
    ], Wellness.prototype, "doctorOnCallException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ellipticalMachine" }),
        __metadata("design:type", Boolean)
    ], Wellness.prototype, "ellipticalMachine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ellipticalMachineException" }),
        __metadata("design:type", String)
    ], Wellness.prototype, "ellipticalMachineException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fitnessCenter" }),
        __metadata("design:type", Boolean)
    ], Wellness.prototype, "fitnessCenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fitnessCenterException" }),
        __metadata("design:type", String)
    ], Wellness.prototype, "fitnessCenterException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeFitnessCenter" }),
        __metadata("design:type", Boolean)
    ], Wellness.prototype, "freeFitnessCenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeFitnessCenterException" }),
        __metadata("design:type", String)
    ], Wellness.prototype, "freeFitnessCenterException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeWeights" }),
        __metadata("design:type", Boolean)
    ], Wellness.prototype, "freeWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeWeightsException" }),
        __metadata("design:type", String)
    ], Wellness.prototype, "freeWeightsException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=massage" }),
        __metadata("design:type", Boolean)
    ], Wellness.prototype, "massage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=massageException" }),
        __metadata("design:type", String)
    ], Wellness.prototype, "massageException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salon" }),
        __metadata("design:type", Boolean)
    ], Wellness.prototype, "salon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salonException" }),
        __metadata("design:type", String)
    ], Wellness.prototype, "salonException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sauna" }),
        __metadata("design:type", Boolean)
    ], Wellness.prototype, "sauna", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saunaException" }),
        __metadata("design:type", String)
    ], Wellness.prototype, "saunaException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spa" }),
        __metadata("design:type", Boolean)
    ], Wellness.prototype, "spa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spaException" }),
        __metadata("design:type", String)
    ], Wellness.prototype, "spaException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treadmill" }),
        __metadata("design:type", Boolean)
    ], Wellness.prototype, "treadmill", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treadmillException" }),
        __metadata("design:type", String)
    ], Wellness.prototype, "treadmillException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weightMachine" }),
        __metadata("design:type", Boolean)
    ], Wellness.prototype, "weightMachine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weightMachineException" }),
        __metadata("design:type", String)
    ], Wellness.prototype, "weightMachineException", void 0);
    return Wellness;
}(SpeakeasyBase));
export { Wellness };
