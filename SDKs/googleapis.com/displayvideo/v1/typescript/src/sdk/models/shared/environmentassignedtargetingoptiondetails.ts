import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    EnvironmentWebOptimized = "ENVIRONMENT_WEB_OPTIMIZED",
    EnvironmentWebNotOptimized = "ENVIRONMENT_WEB_NOT_OPTIMIZED",
    EnvironmentApp = "ENVIRONMENT_APP"
}


// EnvironmentAssignedTargetingOptionDetails
/** 
 * Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
**/
export class EnvironmentAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
