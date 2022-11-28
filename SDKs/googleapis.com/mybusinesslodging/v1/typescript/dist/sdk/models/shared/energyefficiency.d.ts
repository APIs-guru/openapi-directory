import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum EnergyEfficiencyEnergyConservationProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum EnergyEfficiencyEnergyEfficientLightingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum EnergyEfficiencyEnergySavingThermostatsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum EnergyEfficiencyGreenBuildingDesignExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Energy efficiency practices implemented at the hotel.
**/
export declare class EnergyEfficiencyInput extends SpeakeasyBase {
    carbonFreeEnergySources?: boolean;
    carbonFreeEnergySourcesException?: EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum;
    energyConservationProgram?: boolean;
    energyConservationProgramException?: EnergyEfficiencyEnergyConservationProgramExceptionEnum;
    energyEfficientHeatingAndCoolingSystems?: boolean;
    energyEfficientHeatingAndCoolingSystemsException?: EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum;
    energyEfficientLighting?: boolean;
    energyEfficientLightingException?: EnergyEfficiencyEnergyEfficientLightingExceptionEnum;
    energySavingThermostats?: boolean;
    energySavingThermostatsException?: EnergyEfficiencyEnergySavingThermostatsExceptionEnum;
    independentOrganizationAuditsEnergyUse?: boolean;
    independentOrganizationAuditsEnergyUseException?: EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum;
}
/**
 * Energy efficiency practices implemented at the hotel.
**/
export declare class EnergyEfficiency extends SpeakeasyBase {
    carbonFreeEnergySources?: boolean;
    carbonFreeEnergySourcesException?: EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum;
    energyConservationProgram?: boolean;
    energyConservationProgramException?: EnergyEfficiencyEnergyConservationProgramExceptionEnum;
    energyEfficientHeatingAndCoolingSystems?: boolean;
    energyEfficientHeatingAndCoolingSystemsException?: EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum;
    energyEfficientLighting?: boolean;
    energyEfficientLightingException?: EnergyEfficiencyEnergyEfficientLightingExceptionEnum;
    energySavingThermostats?: boolean;
    energySavingThermostatsException?: EnergyEfficiencyEnergySavingThermostatsExceptionEnum;
    greenBuildingDesign?: boolean;
    greenBuildingDesignException?: EnergyEfficiencyGreenBuildingDesignExceptionEnum;
    independentOrganizationAuditsEnergyUse?: boolean;
    independentOrganizationAuditsEnergyUseException?: EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum;
}
