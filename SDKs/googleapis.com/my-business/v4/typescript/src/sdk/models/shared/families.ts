import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FamiliesBabysittingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FamiliesKidsActivitiesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum FamiliesKidsClubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Families
/** 
 * Services and amenities for families and young guests.
**/
export class Families extends SpeakeasyBase {
  @Metadata({ data: "json, name=babysitting" })
  babysitting?: boolean;

  @Metadata({ data: "json, name=babysittingException" })
  babysittingException?: FamiliesBabysittingExceptionEnum;

  @Metadata({ data: "json, name=kidsActivities" })
  kidsActivities?: boolean;

  @Metadata({ data: "json, name=kidsActivitiesException" })
  kidsActivitiesException?: FamiliesKidsActivitiesExceptionEnum;

  @Metadata({ data: "json, name=kidsClub" })
  kidsClub?: boolean;

  @Metadata({ data: "json, name=kidsClubException" })
  kidsClubException?: FamiliesKidsClubExceptionEnum;
}
