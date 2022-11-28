import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnvironmentTargetingOptionDetailsEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    EnvironmentWebOptimized = "ENVIRONMENT_WEB_OPTIMIZED",
    EnvironmentWebNotOptimized = "ENVIRONMENT_WEB_NOT_OPTIMIZED",
    EnvironmentApp = "ENVIRONMENT_APP"
}
/**
 * Represents a targetable environment. This will be populated in the environment_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
**/
export declare class EnvironmentTargetingOptionDetails extends SpeakeasyBase {
    environment?: EnvironmentTargetingOptionDetailsEnvironmentEnum;
}
