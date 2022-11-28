import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PhysicalDistancingPhysicalDistancingRequiredExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PhysicalDistancingSafetyDividersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// PhysicalDistancing
/** 
 * Physical distancing measures implemented by the hotel during COVID-19.
**/
export class PhysicalDistancing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commonAreasPhysicalDistancingArranged" })
  commonAreasPhysicalDistancingArranged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=commonAreasPhysicalDistancingArrangedException" })
  commonAreasPhysicalDistancingArrangedException?: PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=physicalDistancingRequired" })
  physicalDistancingRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=physicalDistancingRequiredException" })
  physicalDistancingRequiredException?: PhysicalDistancingPhysicalDistancingRequiredExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=safetyDividers" })
  safetyDividers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=safetyDividersException" })
  safetyDividersException?: PhysicalDistancingSafetyDividersExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=sharedAreasLimitedOccupancy" })
  sharedAreasLimitedOccupancy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sharedAreasLimitedOccupancyException" })
  sharedAreasLimitedOccupancyException?: PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=wellnessAreasHavePrivateSpaces" })
  wellnessAreasHavePrivateSpaces?: boolean;

  @SpeakeasyMetadata({ data: "json, name=wellnessAreasHavePrivateSpacesException" })
  wellnessAreasHavePrivateSpacesException?: PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum;
}
