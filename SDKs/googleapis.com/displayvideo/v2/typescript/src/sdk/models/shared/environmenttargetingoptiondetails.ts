import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnvironmentTargetingOptionDetailsEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED"
,    EnvironmentWebOptimized = "ENVIRONMENT_WEB_OPTIMIZED"
,    EnvironmentWebNotOptimized = "ENVIRONMENT_WEB_NOT_OPTIMIZED"
,    EnvironmentApp = "ENVIRONMENT_APP"
}


// EnvironmentTargetingOptionDetails
/** 
 * Represents a targetable environment. This will be populated in the environment_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
**/
export class EnvironmentTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: EnvironmentTargetingOptionDetailsEnvironmentEnum;
}
