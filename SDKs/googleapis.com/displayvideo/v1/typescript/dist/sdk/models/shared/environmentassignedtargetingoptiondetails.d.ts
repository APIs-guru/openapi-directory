import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    EnvironmentWebOptimized = "ENVIRONMENT_WEB_OPTIMIZED",
    EnvironmentWebNotOptimized = "ENVIRONMENT_WEB_NOT_OPTIMIZED",
    EnvironmentApp = "ENVIRONMENT_APP"
}
/**
 * Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
**/
export declare class EnvironmentAssignedTargetingOptionDetails extends SpeakeasyBase {
    environment?: EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
    targetingOptionId?: string;
}
