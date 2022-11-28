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
export var EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum;
(function (EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum) {
    EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum || (EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum = {}));
export var EnergyEfficiencyEnergyConservationProgramExceptionEnum;
(function (EnergyEfficiencyEnergyConservationProgramExceptionEnum) {
    EnergyEfficiencyEnergyConservationProgramExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    EnergyEfficiencyEnergyConservationProgramExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    EnergyEfficiencyEnergyConservationProgramExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    EnergyEfficiencyEnergyConservationProgramExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(EnergyEfficiencyEnergyConservationProgramExceptionEnum || (EnergyEfficiencyEnergyConservationProgramExceptionEnum = {}));
export var EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum;
(function (EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum) {
    EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum || (EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum = {}));
export var EnergyEfficiencyEnergyEfficientLightingExceptionEnum;
(function (EnergyEfficiencyEnergyEfficientLightingExceptionEnum) {
    EnergyEfficiencyEnergyEfficientLightingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    EnergyEfficiencyEnergyEfficientLightingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    EnergyEfficiencyEnergyEfficientLightingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    EnergyEfficiencyEnergyEfficientLightingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(EnergyEfficiencyEnergyEfficientLightingExceptionEnum || (EnergyEfficiencyEnergyEfficientLightingExceptionEnum = {}));
export var EnergyEfficiencyEnergySavingThermostatsExceptionEnum;
(function (EnergyEfficiencyEnergySavingThermostatsExceptionEnum) {
    EnergyEfficiencyEnergySavingThermostatsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    EnergyEfficiencyEnergySavingThermostatsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    EnergyEfficiencyEnergySavingThermostatsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    EnergyEfficiencyEnergySavingThermostatsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(EnergyEfficiencyEnergySavingThermostatsExceptionEnum || (EnergyEfficiencyEnergySavingThermostatsExceptionEnum = {}));
export var EnergyEfficiencyGreenBuildingDesignExceptionEnum;
(function (EnergyEfficiencyGreenBuildingDesignExceptionEnum) {
    EnergyEfficiencyGreenBuildingDesignExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    EnergyEfficiencyGreenBuildingDesignExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    EnergyEfficiencyGreenBuildingDesignExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    EnergyEfficiencyGreenBuildingDesignExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(EnergyEfficiencyGreenBuildingDesignExceptionEnum || (EnergyEfficiencyGreenBuildingDesignExceptionEnum = {}));
export var EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum;
(function (EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum) {
    EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum || (EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum = {}));
// EnergyEfficiencyInput
/**
 * Energy efficiency practices implemented at the hotel.
**/
var EnergyEfficiencyInput = /** @class */ (function (_super) {
    __extends(EnergyEfficiencyInput, _super);
    function EnergyEfficiencyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carbonFreeEnergySources" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiencyInput.prototype, "carbonFreeEnergySources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carbonFreeEnergySourcesException" }),
        __metadata("design:type", String)
    ], EnergyEfficiencyInput.prototype, "carbonFreeEnergySourcesException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyConservationProgram" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiencyInput.prototype, "energyConservationProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyConservationProgramException" }),
        __metadata("design:type", String)
    ], EnergyEfficiencyInput.prototype, "energyConservationProgramException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyEfficientHeatingAndCoolingSystems" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiencyInput.prototype, "energyEfficientHeatingAndCoolingSystems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyEfficientHeatingAndCoolingSystemsException" }),
        __metadata("design:type", String)
    ], EnergyEfficiencyInput.prototype, "energyEfficientHeatingAndCoolingSystemsException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyEfficientLighting" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiencyInput.prototype, "energyEfficientLighting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyEfficientLightingException" }),
        __metadata("design:type", String)
    ], EnergyEfficiencyInput.prototype, "energyEfficientLightingException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energySavingThermostats" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiencyInput.prototype, "energySavingThermostats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energySavingThermostatsException" }),
        __metadata("design:type", String)
    ], EnergyEfficiencyInput.prototype, "energySavingThermostatsException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=independentOrganizationAuditsEnergyUse" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiencyInput.prototype, "independentOrganizationAuditsEnergyUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=independentOrganizationAuditsEnergyUseException" }),
        __metadata("design:type", String)
    ], EnergyEfficiencyInput.prototype, "independentOrganizationAuditsEnergyUseException", void 0);
    return EnergyEfficiencyInput;
}(SpeakeasyBase));
export { EnergyEfficiencyInput };
// EnergyEfficiency
/**
 * Energy efficiency practices implemented at the hotel.
**/
var EnergyEfficiency = /** @class */ (function (_super) {
    __extends(EnergyEfficiency, _super);
    function EnergyEfficiency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carbonFreeEnergySources" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiency.prototype, "carbonFreeEnergySources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carbonFreeEnergySourcesException" }),
        __metadata("design:type", String)
    ], EnergyEfficiency.prototype, "carbonFreeEnergySourcesException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyConservationProgram" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiency.prototype, "energyConservationProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyConservationProgramException" }),
        __metadata("design:type", String)
    ], EnergyEfficiency.prototype, "energyConservationProgramException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyEfficientHeatingAndCoolingSystems" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiency.prototype, "energyEfficientHeatingAndCoolingSystems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyEfficientHeatingAndCoolingSystemsException" }),
        __metadata("design:type", String)
    ], EnergyEfficiency.prototype, "energyEfficientHeatingAndCoolingSystemsException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyEfficientLighting" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiency.prototype, "energyEfficientLighting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyEfficientLightingException" }),
        __metadata("design:type", String)
    ], EnergyEfficiency.prototype, "energyEfficientLightingException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energySavingThermostats" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiency.prototype, "energySavingThermostats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energySavingThermostatsException" }),
        __metadata("design:type", String)
    ], EnergyEfficiency.prototype, "energySavingThermostatsException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=greenBuildingDesign" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiency.prototype, "greenBuildingDesign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=greenBuildingDesignException" }),
        __metadata("design:type", String)
    ], EnergyEfficiency.prototype, "greenBuildingDesignException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=independentOrganizationAuditsEnergyUse" }),
        __metadata("design:type", Boolean)
    ], EnergyEfficiency.prototype, "independentOrganizationAuditsEnergyUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=independentOrganizationAuditsEnergyUseException" }),
        __metadata("design:type", String)
    ], EnergyEfficiency.prototype, "independentOrganizationAuditsEnergyUseException", void 0);
    return EnergyEfficiency;
}(SpeakeasyBase));
export { EnergyEfficiency };
