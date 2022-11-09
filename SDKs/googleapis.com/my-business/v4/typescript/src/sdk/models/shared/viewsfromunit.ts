import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ViewsFromUnitBeachViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitCityViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitGardenViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitLakeViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitLandmarkViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitOceanViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitPoolViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitValleyViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// ViewsFromUnit
/** 
 * Views available from the guest unit itself.
**/
export class ViewsFromUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=beachView" })
  beachView?: boolean;

  @Metadata({ data: "json, name=beachViewException" })
  beachViewException?: ViewsFromUnitBeachViewExceptionEnum;

  @Metadata({ data: "json, name=cityView" })
  cityView?: boolean;

  @Metadata({ data: "json, name=cityViewException" })
  cityViewException?: ViewsFromUnitCityViewExceptionEnum;

  @Metadata({ data: "json, name=gardenView" })
  gardenView?: boolean;

  @Metadata({ data: "json, name=gardenViewException" })
  gardenViewException?: ViewsFromUnitGardenViewExceptionEnum;

  @Metadata({ data: "json, name=lakeView" })
  lakeView?: boolean;

  @Metadata({ data: "json, name=lakeViewException" })
  lakeViewException?: ViewsFromUnitLakeViewExceptionEnum;

  @Metadata({ data: "json, name=landmarkView" })
  landmarkView?: boolean;

  @Metadata({ data: "json, name=landmarkViewException" })
  landmarkViewException?: ViewsFromUnitLandmarkViewExceptionEnum;

  @Metadata({ data: "json, name=oceanView" })
  oceanView?: boolean;

  @Metadata({ data: "json, name=oceanViewException" })
  oceanViewException?: ViewsFromUnitOceanViewExceptionEnum;

  @Metadata({ data: "json, name=poolView" })
  poolView?: boolean;

  @Metadata({ data: "json, name=poolViewException" })
  poolViewException?: ViewsFromUnitPoolViewExceptionEnum;

  @Metadata({ data: "json, name=valleyView" })
  valleyView?: boolean;

  @Metadata({ data: "json, name=valleyViewException" })
  valleyViewException?: ViewsFromUnitValleyViewExceptionEnum;
}
