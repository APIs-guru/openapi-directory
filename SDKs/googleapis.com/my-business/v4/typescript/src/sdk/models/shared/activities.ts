import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ActivitiesBeachAccessExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesBeachFrontExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesBicycleRentalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesBoutiqueStoresExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesCasinoExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesFreeBicycleRentalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesFreeWatercraftRentalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesGameRoomExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesGolfExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesHorsebackRidingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesNightclubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesPrivateBeachExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesScubaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesSnorkelingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesTennisExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesWaterSkiingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesWatercraftRentalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Activities
/** 
 * Amenities and features related to leisure and play.
**/
export class Activities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beachAccess" })
  beachAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=beachAccessException" })
  beachAccessException?: ActivitiesBeachAccessExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=beachFront" })
  beachFront?: boolean;

  @SpeakeasyMetadata({ data: "json, name=beachFrontException" })
  beachFrontException?: ActivitiesBeachFrontExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=bicycleRental" })
  bicycleRental?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bicycleRentalException" })
  bicycleRentalException?: ActivitiesBicycleRentalExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=boutiqueStores" })
  boutiqueStores?: boolean;

  @SpeakeasyMetadata({ data: "json, name=boutiqueStoresException" })
  boutiqueStoresException?: ActivitiesBoutiqueStoresExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=casino" })
  casino?: boolean;

  @SpeakeasyMetadata({ data: "json, name=casinoException" })
  casinoException?: ActivitiesCasinoExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=freeBicycleRental" })
  freeBicycleRental?: boolean;

  @SpeakeasyMetadata({ data: "json, name=freeBicycleRentalException" })
  freeBicycleRentalException?: ActivitiesFreeBicycleRentalExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=freeWatercraftRental" })
  freeWatercraftRental?: boolean;

  @SpeakeasyMetadata({ data: "json, name=freeWatercraftRentalException" })
  freeWatercraftRentalException?: ActivitiesFreeWatercraftRentalExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=gameRoom" })
  gameRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gameRoomException" })
  gameRoomException?: ActivitiesGameRoomExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=golf" })
  golf?: boolean;

  @SpeakeasyMetadata({ data: "json, name=golfException" })
  golfException?: ActivitiesGolfExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=horsebackRiding" })
  horsebackRiding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=horsebackRidingException" })
  horsebackRidingException?: ActivitiesHorsebackRidingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=nightclub" })
  nightclub?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nightclubException" })
  nightclubException?: ActivitiesNightclubExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=privateBeach" })
  privateBeach?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privateBeachException" })
  privateBeachException?: ActivitiesPrivateBeachExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=scuba" })
  scuba?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scubaException" })
  scubaException?: ActivitiesScubaExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=snorkeling" })
  snorkeling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=snorkelingException" })
  snorkelingException?: ActivitiesSnorkelingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=tennis" })
  tennis?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tennisException" })
  tennisException?: ActivitiesTennisExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=waterSkiing" })
  waterSkiing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waterSkiingException" })
  waterSkiingException?: ActivitiesWaterSkiingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=watercraftRental" })
  watercraftRental?: boolean;

  @SpeakeasyMetadata({ data: "json, name=watercraftRentalException" })
  watercraftRentalException?: ActivitiesWatercraftRentalExceptionEnum;
}
