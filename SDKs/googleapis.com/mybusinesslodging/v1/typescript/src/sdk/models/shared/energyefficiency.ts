import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnergyEfficiencyEnergyConservationProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnergyEfficiencyEnergyEfficientLightingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnergyEfficiencyEnergySavingThermostatsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnergyEfficiencyGreenBuildingDesignExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// EnergyEfficiency
/** 
 * Energy efficiency practices implemented at the hotel.
**/
export class EnergyEfficiency extends SpeakeasyBase {
  @Metadata({ data: "json, name=carbonFreeEnergySources" })
  carbonFreeEnergySources?: boolean;

  @Metadata({ data: "json, name=carbonFreeEnergySourcesException" })
  carbonFreeEnergySourcesException?: EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum;

  @Metadata({ data: "json, name=energyConservationProgram" })
  energyConservationProgram?: boolean;

  @Metadata({ data: "json, name=energyConservationProgramException" })
  energyConservationProgramException?: EnergyEfficiencyEnergyConservationProgramExceptionEnum;

  @Metadata({ data: "json, name=energyEfficientHeatingAndCoolingSystems" })
  energyEfficientHeatingAndCoolingSystems?: boolean;

  @Metadata({ data: "json, name=energyEfficientHeatingAndCoolingSystemsException" })
  energyEfficientHeatingAndCoolingSystemsException?: EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum;

  @Metadata({ data: "json, name=energyEfficientLighting" })
  energyEfficientLighting?: boolean;

  @Metadata({ data: "json, name=energyEfficientLightingException" })
  energyEfficientLightingException?: EnergyEfficiencyEnergyEfficientLightingExceptionEnum;

  @Metadata({ data: "json, name=energySavingThermostats" })
  energySavingThermostats?: boolean;

  @Metadata({ data: "json, name=energySavingThermostatsException" })
  energySavingThermostatsException?: EnergyEfficiencyEnergySavingThermostatsExceptionEnum;

  @Metadata({ data: "json, name=greenBuildingDesign" })
  greenBuildingDesign?: boolean;

  @Metadata({ data: "json, name=greenBuildingDesignException" })
  greenBuildingDesignException?: EnergyEfficiencyGreenBuildingDesignExceptionEnum;

  @Metadata({ data: "json, name=independentOrganizationAuditsEnergyUse" })
  independentOrganizationAuditsEnergyUse?: boolean;

  @Metadata({ data: "json, name=independentOrganizationAuditsEnergyUseException" })
  independentOrganizationAuditsEnergyUseException?: EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum;
}
