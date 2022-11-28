import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelDescriptor } from "./labeldescriptor";


export enum NotificationChannelDescriptorLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}

export enum NotificationChannelDescriptorSupportedTiersEnum {
    ServiceTierUnspecified = "SERVICE_TIER_UNSPECIFIED",
    ServiceTierBasic = "SERVICE_TIER_BASIC",
    ServiceTierPremium = "SERVICE_TIER_PREMIUM"
}


// NotificationChannelDescriptor
/** 
 * A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type.
**/
export class NotificationChannelDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: LabelDescriptor })
  labels?: LabelDescriptor[];

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: NotificationChannelDescriptorLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=supportedTiers" })
  supportedTiers?: NotificationChannelDescriptorSupportedTiersEnum[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
