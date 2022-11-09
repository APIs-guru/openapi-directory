import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ActivitiesBeachAccessExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesBeachFrontExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesBicycleRentalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesBoutiqueStoresExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesCasinoExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesFreeBicycleRentalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesFreeWatercraftRentalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesGameRoomExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesGolfExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesHorsebackRidingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesNightclubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesPrivateBeachExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesScubaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesSnorkelingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesTennisExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesWaterSkiingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ActivitiesWatercraftRentalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Activities
/** 
 * Amenities and features related to leisure and play.
**/
export class Activities extends SpeakeasyBase {
  @Metadata({ data: "json, name=beachAccess" })
  beachAccess?: boolean;

  @Metadata({ data: "json, name=beachAccessException" })
  beachAccessException?: ActivitiesBeachAccessExceptionEnum;

  @Metadata({ data: "json, name=beachFront" })
  beachFront?: boolean;

  @Metadata({ data: "json, name=beachFrontException" })
  beachFrontException?: ActivitiesBeachFrontExceptionEnum;

  @Metadata({ data: "json, name=bicycleRental" })
  bicycleRental?: boolean;

  @Metadata({ data: "json, name=bicycleRentalException" })
  bicycleRentalException?: ActivitiesBicycleRentalExceptionEnum;

  @Metadata({ data: "json, name=boutiqueStores" })
  boutiqueStores?: boolean;

  @Metadata({ data: "json, name=boutiqueStoresException" })
  boutiqueStoresException?: ActivitiesBoutiqueStoresExceptionEnum;

  @Metadata({ data: "json, name=casino" })
  casino?: boolean;

  @Metadata({ data: "json, name=casinoException" })
  casinoException?: ActivitiesCasinoExceptionEnum;

  @Metadata({ data: "json, name=freeBicycleRental" })
  freeBicycleRental?: boolean;

  @Metadata({ data: "json, name=freeBicycleRentalException" })
  freeBicycleRentalException?: ActivitiesFreeBicycleRentalExceptionEnum;

  @Metadata({ data: "json, name=freeWatercraftRental" })
  freeWatercraftRental?: boolean;

  @Metadata({ data: "json, name=freeWatercraftRentalException" })
  freeWatercraftRentalException?: ActivitiesFreeWatercraftRentalExceptionEnum;

  @Metadata({ data: "json, name=gameRoom" })
  gameRoom?: boolean;

  @Metadata({ data: "json, name=gameRoomException" })
  gameRoomException?: ActivitiesGameRoomExceptionEnum;

  @Metadata({ data: "json, name=golf" })
  golf?: boolean;

  @Metadata({ data: "json, name=golfException" })
  golfException?: ActivitiesGolfExceptionEnum;

  @Metadata({ data: "json, name=horsebackRiding" })
  horsebackRiding?: boolean;

  @Metadata({ data: "json, name=horsebackRidingException" })
  horsebackRidingException?: ActivitiesHorsebackRidingExceptionEnum;

  @Metadata({ data: "json, name=nightclub" })
  nightclub?: boolean;

  @Metadata({ data: "json, name=nightclubException" })
  nightclubException?: ActivitiesNightclubExceptionEnum;

  @Metadata({ data: "json, name=privateBeach" })
  privateBeach?: boolean;

  @Metadata({ data: "json, name=privateBeachException" })
  privateBeachException?: ActivitiesPrivateBeachExceptionEnum;

  @Metadata({ data: "json, name=scuba" })
  scuba?: boolean;

  @Metadata({ data: "json, name=scubaException" })
  scubaException?: ActivitiesScubaExceptionEnum;

  @Metadata({ data: "json, name=snorkeling" })
  snorkeling?: boolean;

  @Metadata({ data: "json, name=snorkelingException" })
  snorkelingException?: ActivitiesSnorkelingExceptionEnum;

  @Metadata({ data: "json, name=tennis" })
  tennis?: boolean;

  @Metadata({ data: "json, name=tennisException" })
  tennisException?: ActivitiesTennisExceptionEnum;

  @Metadata({ data: "json, name=waterSkiing" })
  waterSkiing?: boolean;

  @Metadata({ data: "json, name=waterSkiingException" })
  waterSkiingException?: ActivitiesWaterSkiingExceptionEnum;

  @Metadata({ data: "json, name=watercraftRental" })
  watercraftRental?: boolean;

  @Metadata({ data: "json, name=watercraftRentalException" })
  watercraftRentalException?: ActivitiesWatercraftRentalExceptionEnum;
}
