import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WasteReductionCompostableFoodContainersAndCutleryExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionCompostsExcessFoodExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionDonatesExcessFoodExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionFoodWasteReductionProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionNoSingleUsePlasticStrawsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionNoStyrofoamFoodContainersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionRecyclingProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionRefillableToiletryContainersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionSafelyDisposesBatteriesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionSafelyDisposesElectronicsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionSafelyDisposesLightbulbsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionSoapDonationProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionToiletryDonationProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionWaterBottleFillingStationsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// WasteReduction
/** 
 * Waste reduction practices implemented at the hotel.
**/
export class WasteReduction extends SpeakeasyBase {
  @Metadata({ data: "json, name=compostableFoodContainersAndCutlery" })
  compostableFoodContainersAndCutlery?: boolean;

  @Metadata({ data: "json, name=compostableFoodContainersAndCutleryException" })
  compostableFoodContainersAndCutleryException?: WasteReductionCompostableFoodContainersAndCutleryExceptionEnum;

  @Metadata({ data: "json, name=compostsExcessFood" })
  compostsExcessFood?: boolean;

  @Metadata({ data: "json, name=compostsExcessFoodException" })
  compostsExcessFoodException?: WasteReductionCompostsExcessFoodExceptionEnum;

  @Metadata({ data: "json, name=donatesExcessFood" })
  donatesExcessFood?: boolean;

  @Metadata({ data: "json, name=donatesExcessFoodException" })
  donatesExcessFoodException?: WasteReductionDonatesExcessFoodExceptionEnum;

  @Metadata({ data: "json, name=foodWasteReductionProgram" })
  foodWasteReductionProgram?: boolean;

  @Metadata({ data: "json, name=foodWasteReductionProgramException" })
  foodWasteReductionProgramException?: WasteReductionFoodWasteReductionProgramExceptionEnum;

  @Metadata({ data: "json, name=noSingleUsePlasticStraws" })
  noSingleUsePlasticStraws?: boolean;

  @Metadata({ data: "json, name=noSingleUsePlasticStrawsException" })
  noSingleUsePlasticStrawsException?: WasteReductionNoSingleUsePlasticStrawsExceptionEnum;

  @Metadata({ data: "json, name=noSingleUsePlasticWaterBottles" })
  noSingleUsePlasticWaterBottles?: boolean;

  @Metadata({ data: "json, name=noSingleUsePlasticWaterBottlesException" })
  noSingleUsePlasticWaterBottlesException?: WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum;

  @Metadata({ data: "json, name=noStyrofoamFoodContainers" })
  noStyrofoamFoodContainers?: boolean;

  @Metadata({ data: "json, name=noStyrofoamFoodContainersException" })
  noStyrofoamFoodContainersException?: WasteReductionNoStyrofoamFoodContainersExceptionEnum;

  @Metadata({ data: "json, name=recyclingProgram" })
  recyclingProgram?: boolean;

  @Metadata({ data: "json, name=recyclingProgramException" })
  recyclingProgramException?: WasteReductionRecyclingProgramExceptionEnum;

  @Metadata({ data: "json, name=refillableToiletryContainers" })
  refillableToiletryContainers?: boolean;

  @Metadata({ data: "json, name=refillableToiletryContainersException" })
  refillableToiletryContainersException?: WasteReductionRefillableToiletryContainersExceptionEnum;

  @Metadata({ data: "json, name=safelyDisposesBatteries" })
  safelyDisposesBatteries?: boolean;

  @Metadata({ data: "json, name=safelyDisposesBatteriesException" })
  safelyDisposesBatteriesException?: WasteReductionSafelyDisposesBatteriesExceptionEnum;

  @Metadata({ data: "json, name=safelyDisposesElectronics" })
  safelyDisposesElectronics?: boolean;

  @Metadata({ data: "json, name=safelyDisposesElectronicsException" })
  safelyDisposesElectronicsException?: WasteReductionSafelyDisposesElectronicsExceptionEnum;

  @Metadata({ data: "json, name=safelyDisposesLightbulbs" })
  safelyDisposesLightbulbs?: boolean;

  @Metadata({ data: "json, name=safelyDisposesLightbulbsException" })
  safelyDisposesLightbulbsException?: WasteReductionSafelyDisposesLightbulbsExceptionEnum;

  @Metadata({ data: "json, name=safelyHandlesHazardousSubstances" })
  safelyHandlesHazardousSubstances?: boolean;

  @Metadata({ data: "json, name=safelyHandlesHazardousSubstancesException" })
  safelyHandlesHazardousSubstancesException?: WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum;

  @Metadata({ data: "json, name=soapDonationProgram" })
  soapDonationProgram?: boolean;

  @Metadata({ data: "json, name=soapDonationProgramException" })
  soapDonationProgramException?: WasteReductionSoapDonationProgramExceptionEnum;

  @Metadata({ data: "json, name=toiletryDonationProgram" })
  toiletryDonationProgram?: boolean;

  @Metadata({ data: "json, name=toiletryDonationProgramException" })
  toiletryDonationProgramException?: WasteReductionToiletryDonationProgramExceptionEnum;

  @Metadata({ data: "json, name=waterBottleFillingStations" })
  waterBottleFillingStations?: boolean;

  @Metadata({ data: "json, name=waterBottleFillingStationsException" })
  waterBottleFillingStationsException?: WasteReductionWaterBottleFillingStationsExceptionEnum;
}
