import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WasteReductionCompostableFoodContainersAndCutleryExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionCompostsExcessFoodExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionDonatesExcessFoodExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionFoodWasteReductionProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionNoSingleUsePlasticStrawsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionNoStyrofoamFoodContainersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionRecyclingProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionRefillableToiletryContainersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionSafelyDisposesBatteriesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionSafelyDisposesElectronicsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionSafelyDisposesLightbulbsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionSoapDonationProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionToiletryDonationProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WasteReductionWaterBottleFillingStationsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// WasteReduction
/** 
 * Waste reduction practices implemented at the hotel.
**/
export class WasteReduction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compostableFoodContainersAndCutlery" })
  compostableFoodContainersAndCutlery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=compostableFoodContainersAndCutleryException" })
  compostableFoodContainersAndCutleryException?: WasteReductionCompostableFoodContainersAndCutleryExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=compostsExcessFood" })
  compostsExcessFood?: boolean;

  @SpeakeasyMetadata({ data: "json, name=compostsExcessFoodException" })
  compostsExcessFoodException?: WasteReductionCompostsExcessFoodExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=donatesExcessFood" })
  donatesExcessFood?: boolean;

  @SpeakeasyMetadata({ data: "json, name=donatesExcessFoodException" })
  donatesExcessFoodException?: WasteReductionDonatesExcessFoodExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=foodWasteReductionProgram" })
  foodWasteReductionProgram?: boolean;

  @SpeakeasyMetadata({ data: "json, name=foodWasteReductionProgramException" })
  foodWasteReductionProgramException?: WasteReductionFoodWasteReductionProgramExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=noSingleUsePlasticStraws" })
  noSingleUsePlasticStraws?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noSingleUsePlasticStrawsException" })
  noSingleUsePlasticStrawsException?: WasteReductionNoSingleUsePlasticStrawsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=noSingleUsePlasticWaterBottles" })
  noSingleUsePlasticWaterBottles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noSingleUsePlasticWaterBottlesException" })
  noSingleUsePlasticWaterBottlesException?: WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=noStyrofoamFoodContainers" })
  noStyrofoamFoodContainers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noStyrofoamFoodContainersException" })
  noStyrofoamFoodContainersException?: WasteReductionNoStyrofoamFoodContainersExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=recyclingProgram" })
  recyclingProgram?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recyclingProgramException" })
  recyclingProgramException?: WasteReductionRecyclingProgramExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=refillableToiletryContainers" })
  refillableToiletryContainers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=refillableToiletryContainersException" })
  refillableToiletryContainersException?: WasteReductionRefillableToiletryContainersExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=safelyDisposesBatteries" })
  safelyDisposesBatteries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=safelyDisposesBatteriesException" })
  safelyDisposesBatteriesException?: WasteReductionSafelyDisposesBatteriesExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=safelyDisposesElectronics" })
  safelyDisposesElectronics?: boolean;

  @SpeakeasyMetadata({ data: "json, name=safelyDisposesElectronicsException" })
  safelyDisposesElectronicsException?: WasteReductionSafelyDisposesElectronicsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=safelyDisposesLightbulbs" })
  safelyDisposesLightbulbs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=safelyDisposesLightbulbsException" })
  safelyDisposesLightbulbsException?: WasteReductionSafelyDisposesLightbulbsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=safelyHandlesHazardousSubstances" })
  safelyHandlesHazardousSubstances?: boolean;

  @SpeakeasyMetadata({ data: "json, name=safelyHandlesHazardousSubstancesException" })
  safelyHandlesHazardousSubstancesException?: WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=soapDonationProgram" })
  soapDonationProgram?: boolean;

  @SpeakeasyMetadata({ data: "json, name=soapDonationProgramException" })
  soapDonationProgramException?: WasteReductionSoapDonationProgramExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=toiletryDonationProgram" })
  toiletryDonationProgram?: boolean;

  @SpeakeasyMetadata({ data: "json, name=toiletryDonationProgramException" })
  toiletryDonationProgramException?: WasteReductionToiletryDonationProgramExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=waterBottleFillingStations" })
  waterBottleFillingStations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waterBottleFillingStationsException" })
  waterBottleFillingStationsException?: WasteReductionWaterBottleFillingStationsExceptionEnum;
}
