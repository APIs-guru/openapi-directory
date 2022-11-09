import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LivingAreaFeaturesAirConditioningExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesBathtubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesBidetExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesDryerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesElectronicRoomKeyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesFireplaceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesHairdryerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesHeatingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesInunitSafeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesInunitWifiAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesIroningEquipmentExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesPayPerViewMoviesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesPrivateBathroomExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesShowerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesToiletExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesTvCastingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesTvExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesTvStreamingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaFeaturesWasherExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LivingAreaFeatures
/** 
 * Features in the living area.
**/
export class LivingAreaFeatures extends SpeakeasyBase {
  @Metadata({ data: "json, name=airConditioning" })
  airConditioning?: boolean;

  @Metadata({ data: "json, name=airConditioningException" })
  airConditioningException?: LivingAreaFeaturesAirConditioningExceptionEnum;

  @Metadata({ data: "json, name=bathtub" })
  bathtub?: boolean;

  @Metadata({ data: "json, name=bathtubException" })
  bathtubException?: LivingAreaFeaturesBathtubExceptionEnum;

  @Metadata({ data: "json, name=bidet" })
  bidet?: boolean;

  @Metadata({ data: "json, name=bidetException" })
  bidetException?: LivingAreaFeaturesBidetExceptionEnum;

  @Metadata({ data: "json, name=dryer" })
  dryer?: boolean;

  @Metadata({ data: "json, name=dryerException" })
  dryerException?: LivingAreaFeaturesDryerExceptionEnum;

  @Metadata({ data: "json, name=electronicRoomKey" })
  electronicRoomKey?: boolean;

  @Metadata({ data: "json, name=electronicRoomKeyException" })
  electronicRoomKeyException?: LivingAreaFeaturesElectronicRoomKeyExceptionEnum;

  @Metadata({ data: "json, name=fireplace" })
  fireplace?: boolean;

  @Metadata({ data: "json, name=fireplaceException" })
  fireplaceException?: LivingAreaFeaturesFireplaceExceptionEnum;

  @Metadata({ data: "json, name=hairdryer" })
  hairdryer?: boolean;

  @Metadata({ data: "json, name=hairdryerException" })
  hairdryerException?: LivingAreaFeaturesHairdryerExceptionEnum;

  @Metadata({ data: "json, name=heating" })
  heating?: boolean;

  @Metadata({ data: "json, name=heatingException" })
  heatingException?: LivingAreaFeaturesHeatingExceptionEnum;

  @Metadata({ data: "json, name=inunitSafe" })
  inunitSafe?: boolean;

  @Metadata({ data: "json, name=inunitSafeException" })
  inunitSafeException?: LivingAreaFeaturesInunitSafeExceptionEnum;

  @Metadata({ data: "json, name=inunitWifiAvailable" })
  inunitWifiAvailable?: boolean;

  @Metadata({ data: "json, name=inunitWifiAvailableException" })
  inunitWifiAvailableException?: LivingAreaFeaturesInunitWifiAvailableExceptionEnum;

  @Metadata({ data: "json, name=ironingEquipment" })
  ironingEquipment?: boolean;

  @Metadata({ data: "json, name=ironingEquipmentException" })
  ironingEquipmentException?: LivingAreaFeaturesIroningEquipmentExceptionEnum;

  @Metadata({ data: "json, name=payPerViewMovies" })
  payPerViewMovies?: boolean;

  @Metadata({ data: "json, name=payPerViewMoviesException" })
  payPerViewMoviesException?: LivingAreaFeaturesPayPerViewMoviesExceptionEnum;

  @Metadata({ data: "json, name=privateBathroom" })
  privateBathroom?: boolean;

  @Metadata({ data: "json, name=privateBathroomException" })
  privateBathroomException?: LivingAreaFeaturesPrivateBathroomExceptionEnum;

  @Metadata({ data: "json, name=shower" })
  shower?: boolean;

  @Metadata({ data: "json, name=showerException" })
  showerException?: LivingAreaFeaturesShowerExceptionEnum;

  @Metadata({ data: "json, name=toilet" })
  toilet?: boolean;

  @Metadata({ data: "json, name=toiletException" })
  toiletException?: LivingAreaFeaturesToiletExceptionEnum;

  @Metadata({ data: "json, name=tv" })
  tv?: boolean;

  @Metadata({ data: "json, name=tvCasting" })
  tvCasting?: boolean;

  @Metadata({ data: "json, name=tvCastingException" })
  tvCastingException?: LivingAreaFeaturesTvCastingExceptionEnum;

  @Metadata({ data: "json, name=tvException" })
  tvException?: LivingAreaFeaturesTvExceptionEnum;

  @Metadata({ data: "json, name=tvStreaming" })
  tvStreaming?: boolean;

  @Metadata({ data: "json, name=tvStreamingException" })
  tvStreamingException?: LivingAreaFeaturesTvStreamingExceptionEnum;

  @Metadata({ data: "json, name=universalPowerAdapters" })
  universalPowerAdapters?: boolean;

  @Metadata({ data: "json, name=universalPowerAdaptersException" })
  universalPowerAdaptersException?: LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum;

  @Metadata({ data: "json, name=washer" })
  washer?: boolean;

  @Metadata({ data: "json, name=washerException" })
  washerException?: LivingAreaFeaturesWasherExceptionEnum;
}
