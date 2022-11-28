import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LivingAreaFeaturesAirConditioningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesBathtubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesBidetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesDryerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesElectronicRoomKeyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesFireplaceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesHairdryerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesHeatingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesInunitSafeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesInunitWifiAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesIroningEquipmentExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesPayPerViewMoviesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesPrivateBathroomExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesShowerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesToiletExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesTvCastingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesTvExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesTvStreamingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaFeaturesWasherExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Features in the living area.
**/
export declare class LivingAreaFeatures extends SpeakeasyBase {
    airConditioning?: boolean;
    airConditioningException?: LivingAreaFeaturesAirConditioningExceptionEnum;
    bathtub?: boolean;
    bathtubException?: LivingAreaFeaturesBathtubExceptionEnum;
    bidet?: boolean;
    bidetException?: LivingAreaFeaturesBidetExceptionEnum;
    dryer?: boolean;
    dryerException?: LivingAreaFeaturesDryerExceptionEnum;
    electronicRoomKey?: boolean;
    electronicRoomKeyException?: LivingAreaFeaturesElectronicRoomKeyExceptionEnum;
    fireplace?: boolean;
    fireplaceException?: LivingAreaFeaturesFireplaceExceptionEnum;
    hairdryer?: boolean;
    hairdryerException?: LivingAreaFeaturesHairdryerExceptionEnum;
    heating?: boolean;
    heatingException?: LivingAreaFeaturesHeatingExceptionEnum;
    inunitSafe?: boolean;
    inunitSafeException?: LivingAreaFeaturesInunitSafeExceptionEnum;
    inunitWifiAvailable?: boolean;
    inunitWifiAvailableException?: LivingAreaFeaturesInunitWifiAvailableExceptionEnum;
    ironingEquipment?: boolean;
    ironingEquipmentException?: LivingAreaFeaturesIroningEquipmentExceptionEnum;
    payPerViewMovies?: boolean;
    payPerViewMoviesException?: LivingAreaFeaturesPayPerViewMoviesExceptionEnum;
    privateBathroom?: boolean;
    privateBathroomException?: LivingAreaFeaturesPrivateBathroomExceptionEnum;
    shower?: boolean;
    showerException?: LivingAreaFeaturesShowerExceptionEnum;
    toilet?: boolean;
    toiletException?: LivingAreaFeaturesToiletExceptionEnum;
    tv?: boolean;
    tvCasting?: boolean;
    tvCastingException?: LivingAreaFeaturesTvCastingExceptionEnum;
    tvException?: LivingAreaFeaturesTvExceptionEnum;
    tvStreaming?: boolean;
    tvStreamingException?: LivingAreaFeaturesTvStreamingExceptionEnum;
    universalPowerAdapters?: boolean;
    universalPowerAdaptersException?: LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum;
    washer?: boolean;
    washerException?: LivingAreaFeaturesWasherExceptionEnum;
}
