import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WasteReductionCompostableFoodContainersAndCutleryExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionCompostsExcessFoodExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionDonatesExcessFoodExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionFoodWasteReductionProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionNoSingleUsePlasticStrawsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionNoStyrofoamFoodContainersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionRecyclingProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionRefillableToiletryContainersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionSafelyDisposesBatteriesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionSafelyDisposesElectronicsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionSafelyDisposesLightbulbsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionSoapDonationProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionToiletryDonationProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WasteReductionWaterBottleFillingStationsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Waste reduction practices implemented at the hotel.
**/
export declare class WasteReduction extends SpeakeasyBase {
    compostableFoodContainersAndCutlery?: boolean;
    compostableFoodContainersAndCutleryException?: WasteReductionCompostableFoodContainersAndCutleryExceptionEnum;
    compostsExcessFood?: boolean;
    compostsExcessFoodException?: WasteReductionCompostsExcessFoodExceptionEnum;
    donatesExcessFood?: boolean;
    donatesExcessFoodException?: WasteReductionDonatesExcessFoodExceptionEnum;
    foodWasteReductionProgram?: boolean;
    foodWasteReductionProgramException?: WasteReductionFoodWasteReductionProgramExceptionEnum;
    noSingleUsePlasticStraws?: boolean;
    noSingleUsePlasticStrawsException?: WasteReductionNoSingleUsePlasticStrawsExceptionEnum;
    noSingleUsePlasticWaterBottles?: boolean;
    noSingleUsePlasticWaterBottlesException?: WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum;
    noStyrofoamFoodContainers?: boolean;
    noStyrofoamFoodContainersException?: WasteReductionNoStyrofoamFoodContainersExceptionEnum;
    recyclingProgram?: boolean;
    recyclingProgramException?: WasteReductionRecyclingProgramExceptionEnum;
    refillableToiletryContainers?: boolean;
    refillableToiletryContainersException?: WasteReductionRefillableToiletryContainersExceptionEnum;
    safelyDisposesBatteries?: boolean;
    safelyDisposesBatteriesException?: WasteReductionSafelyDisposesBatteriesExceptionEnum;
    safelyDisposesElectronics?: boolean;
    safelyDisposesElectronicsException?: WasteReductionSafelyDisposesElectronicsExceptionEnum;
    safelyDisposesLightbulbs?: boolean;
    safelyDisposesLightbulbsException?: WasteReductionSafelyDisposesLightbulbsExceptionEnum;
    safelyHandlesHazardousSubstances?: boolean;
    safelyHandlesHazardousSubstancesException?: WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum;
    soapDonationProgram?: boolean;
    soapDonationProgramException?: WasteReductionSoapDonationProgramExceptionEnum;
    toiletryDonationProgram?: boolean;
    toiletryDonationProgramException?: WasteReductionToiletryDonationProgramExceptionEnum;
    waterBottleFillingStations?: boolean;
    waterBottleFillingStationsException?: WasteReductionWaterBottleFillingStationsExceptionEnum;
}
