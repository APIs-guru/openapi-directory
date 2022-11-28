import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MetricDescriptorMetadataLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * Additional annotations that can be used to guide the usage of a metric.
**/
export declare class MetricDescriptorMetadata extends SpeakeasyBase {
    ingestDelay?: string;
    launchStage?: MetricDescriptorMetadataLaunchStageEnum;
    samplePeriod?: string;
}
