import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FamiliesBabysittingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FamiliesKidsActivitiesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FamiliesKidsClubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FamiliesKidsFriendlyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Families
/** 
 * Services and amenities for families and young guests.
**/
export class Families extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=babysitting" })
  babysitting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=babysittingException" })
  babysittingException?: FamiliesBabysittingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=kidsActivities" })
  kidsActivities?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kidsActivitiesException" })
  kidsActivitiesException?: FamiliesKidsActivitiesExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=kidsClub" })
  kidsClub?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kidsClubException" })
  kidsClubException?: FamiliesKidsClubExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=kidsFriendly" })
  kidsFriendly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kidsFriendlyException" })
  kidsFriendlyException?: FamiliesKidsFriendlyExceptionEnum;
}
