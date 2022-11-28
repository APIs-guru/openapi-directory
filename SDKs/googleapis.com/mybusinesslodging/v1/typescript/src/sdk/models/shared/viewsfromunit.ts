import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ViewsFromUnitBeachViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitCityViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitGardenViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitLakeViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitLandmarkViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitOceanViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitPoolViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ViewsFromUnitValleyViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// ViewsFromUnit
/** 
 * Views available from the guest unit itself.
**/
export class ViewsFromUnit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beachView" })
  beachView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=beachViewException" })
  beachViewException?: ViewsFromUnitBeachViewExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=cityView" })
  cityView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cityViewException" })
  cityViewException?: ViewsFromUnitCityViewExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=gardenView" })
  gardenView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gardenViewException" })
  gardenViewException?: ViewsFromUnitGardenViewExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=lakeView" })
  lakeView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lakeViewException" })
  lakeViewException?: ViewsFromUnitLakeViewExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=landmarkView" })
  landmarkView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=landmarkViewException" })
  landmarkViewException?: ViewsFromUnitLandmarkViewExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=oceanView" })
  oceanView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oceanViewException" })
  oceanViewException?: ViewsFromUnitOceanViewExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=poolView" })
  poolView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=poolViewException" })
  poolViewException?: ViewsFromUnitPoolViewExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=valleyView" })
  valleyView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=valleyViewException" })
  valleyViewException?: ViewsFromUnitValleyViewExceptionEnum;
}
