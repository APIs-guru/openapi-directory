import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnergyEfficiencyEnergyConservationProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnergyEfficiencyEnergyEfficientLightingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnergyEfficiencyEnergySavingThermostatsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnergyEfficiencyGreenBuildingDesignExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// EnergyEfficiencyInput
/** 
 * Energy efficiency practices implemented at the hotel.
**/
export class EnergyEfficiencyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carbonFreeEnergySources" })
  carbonFreeEnergySources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=carbonFreeEnergySourcesException" })
  carbonFreeEnergySourcesException?: EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=energyConservationProgram" })
  energyConservationProgram?: boolean;

  @SpeakeasyMetadata({ data: "json, name=energyConservationProgramException" })
  energyConservationProgramException?: EnergyEfficiencyEnergyConservationProgramExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=energyEfficientHeatingAndCoolingSystems" })
  energyEfficientHeatingAndCoolingSystems?: boolean;

  @SpeakeasyMetadata({ data: "json, name=energyEfficientHeatingAndCoolingSystemsException" })
  energyEfficientHeatingAndCoolingSystemsException?: EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=energyEfficientLighting" })
  energyEfficientLighting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=energyEfficientLightingException" })
  energyEfficientLightingException?: EnergyEfficiencyEnergyEfficientLightingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=energySavingThermostats" })
  energySavingThermostats?: boolean;

  @SpeakeasyMetadata({ data: "json, name=energySavingThermostatsException" })
  energySavingThermostatsException?: EnergyEfficiencyEnergySavingThermostatsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=independentOrganizationAuditsEnergyUse" })
  independentOrganizationAuditsEnergyUse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=independentOrganizationAuditsEnergyUseException" })
  independentOrganizationAuditsEnergyUseException?: EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum;
}


// EnergyEfficiency
/** 
 * Energy efficiency practices implemented at the hotel.
**/
export class EnergyEfficiency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carbonFreeEnergySources" })
  carbonFreeEnergySources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=carbonFreeEnergySourcesException" })
  carbonFreeEnergySourcesException?: EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=energyConservationProgram" })
  energyConservationProgram?: boolean;

  @SpeakeasyMetadata({ data: "json, name=energyConservationProgramException" })
  energyConservationProgramException?: EnergyEfficiencyEnergyConservationProgramExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=energyEfficientHeatingAndCoolingSystems" })
  energyEfficientHeatingAndCoolingSystems?: boolean;

  @SpeakeasyMetadata({ data: "json, name=energyEfficientHeatingAndCoolingSystemsException" })
  energyEfficientHeatingAndCoolingSystemsException?: EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=energyEfficientLighting" })
  energyEfficientLighting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=energyEfficientLightingException" })
  energyEfficientLightingException?: EnergyEfficiencyEnergyEfficientLightingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=energySavingThermostats" })
  energySavingThermostats?: boolean;

  @SpeakeasyMetadata({ data: "json, name=energySavingThermostatsException" })
  energySavingThermostatsException?: EnergyEfficiencyEnergySavingThermostatsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=greenBuildingDesign" })
  greenBuildingDesign?: boolean;

  @SpeakeasyMetadata({ data: "json, name=greenBuildingDesignException" })
  greenBuildingDesignException?: EnergyEfficiencyGreenBuildingDesignExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=independentOrganizationAuditsEnergyUse" })
  independentOrganizationAuditsEnergyUse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=independentOrganizationAuditsEnergyUseException" })
  independentOrganizationAuditsEnergyUseException?: EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum;
}
