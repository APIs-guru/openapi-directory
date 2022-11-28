import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LivingAreaFeaturesAirConditioningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesBathtubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesBidetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesDryerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesElectronicRoomKeyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesFireplaceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesHairdryerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesHeatingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesInunitSafeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesInunitWifiAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesIroningEquipmentExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesPayPerViewMoviesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesPrivateBathroomExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesShowerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesToiletExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesTvCastingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesTvExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesTvStreamingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesWasherExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LivingAreaFeatures
/** 
 * Features in the living area.
**/
export class LivingAreaFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=airConditioning" })
  airConditioning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=airConditioningException" })
  airConditioningException?: LivingAreaFeaturesAirConditioningExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=bathtub" })
  bathtub?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bathtubException" })
  bathtubException?: LivingAreaFeaturesBathtubExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=bidet" })
  bidet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bidetException" })
  bidetException?: LivingAreaFeaturesBidetExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=dryer" })
  dryer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dryerException" })
  dryerException?: LivingAreaFeaturesDryerExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=electronicRoomKey" })
  electronicRoomKey?: boolean;

  @SpeakeasyMetadata({ data: "json, name=electronicRoomKeyException" })
  electronicRoomKeyException?: LivingAreaFeaturesElectronicRoomKeyExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=fireplace" })
  fireplace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fireplaceException" })
  fireplaceException?: LivingAreaFeaturesFireplaceExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=hairdryer" })
  hairdryer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hairdryerException" })
  hairdryerException?: LivingAreaFeaturesHairdryerExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=heating" })
  heating?: boolean;

  @SpeakeasyMetadata({ data: "json, name=heatingException" })
  heatingException?: LivingAreaFeaturesHeatingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=inunitSafe" })
  inunitSafe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inunitSafeException" })
  inunitSafeException?: LivingAreaFeaturesInunitSafeExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=inunitWifiAvailable" })
  inunitWifiAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inunitWifiAvailableException" })
  inunitWifiAvailableException?: LivingAreaFeaturesInunitWifiAvailableExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=ironingEquipment" })
  ironingEquipment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ironingEquipmentException" })
  ironingEquipmentException?: LivingAreaFeaturesIroningEquipmentExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=payPerViewMovies" })
  payPerViewMovies?: boolean;

  @SpeakeasyMetadata({ data: "json, name=payPerViewMoviesException" })
  payPerViewMoviesException?: LivingAreaFeaturesPayPerViewMoviesExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=privateBathroom" })
  privateBathroom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privateBathroomException" })
  privateBathroomException?: LivingAreaFeaturesPrivateBathroomExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=shower" })
  shower?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showerException" })
  showerException?: LivingAreaFeaturesShowerExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=toilet" })
  toilet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=toiletException" })
  toiletException?: LivingAreaFeaturesToiletExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=tv" })
  tv?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tvCasting" })
  tvCasting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tvCastingException" })
  tvCastingException?: LivingAreaFeaturesTvCastingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=tvException" })
  tvException?: LivingAreaFeaturesTvExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=tvStreaming" })
  tvStreaming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tvStreamingException" })
  tvStreamingException?: LivingAreaFeaturesTvStreamingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=universalPowerAdapters" })
  universalPowerAdapters?: boolean;

  @SpeakeasyMetadata({ data: "json, name=universalPowerAdaptersException" })
  universalPowerAdaptersException?: LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=washer" })
  washer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=washerException" })
  washerException?: LivingAreaFeaturesWasherExceptionEnum;
}
