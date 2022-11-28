import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MetricDescriptorMetadataLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}


// MetricDescriptorMetadata
/** 
 * Additional annotations that can be used to guide the usage of a metric.
**/
export class MetricDescriptorMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ingestDelay" })
  ingestDelay?: string;

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: MetricDescriptorMetadataLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=samplePeriod" })
  samplePeriod?: string;
}
