import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PhysicalDistancingPhysicalDistancingRequiredExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PhysicalDistancingSafetyDividersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// PhysicalDistancing
/** 
 * Physical distancing measures implemented by the hotel during COVID-19.
**/
export class PhysicalDistancing extends SpeakeasyBase {
  @Metadata({ data: "json, name=commonAreasPhysicalDistancingArranged" })
  commonAreasPhysicalDistancingArranged?: boolean;

  @Metadata({ data: "json, name=commonAreasPhysicalDistancingArrangedException" })
  commonAreasPhysicalDistancingArrangedException?: PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum;

  @Metadata({ data: "json, name=physicalDistancingRequired" })
  physicalDistancingRequired?: boolean;

  @Metadata({ data: "json, name=physicalDistancingRequiredException" })
  physicalDistancingRequiredException?: PhysicalDistancingPhysicalDistancingRequiredExceptionEnum;

  @Metadata({ data: "json, name=safetyDividers" })
  safetyDividers?: boolean;

  @Metadata({ data: "json, name=safetyDividersException" })
  safetyDividersException?: PhysicalDistancingSafetyDividersExceptionEnum;

  @Metadata({ data: "json, name=sharedAreasLimitedOccupancy" })
  sharedAreasLimitedOccupancy?: boolean;

  @Metadata({ data: "json, name=sharedAreasLimitedOccupancyException" })
  sharedAreasLimitedOccupancyException?: PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum;

  @Metadata({ data: "json, name=wellnessAreasHavePrivateSpaces" })
  wellnessAreasHavePrivateSpaces?: boolean;

  @Metadata({ data: "json, name=wellnessAreasHavePrivateSpacesException" })
  wellnessAreasHavePrivateSpacesException?: PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum;
}
