import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LabelDescriptor } from "./labeldescriptor";

export enum NotificationChannelDescriptorLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED"
,    Unimplemented = "UNIMPLEMENTED"
,    Prelaunch = "PRELAUNCH"
,    EarlyAccess = "EARLY_ACCESS"
,    Alpha = "ALPHA"
,    Beta = "BETA"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
}

export enum NotificationChannelDescriptorSupportedTiersEnum {
    ServiceTierUnspecified = "SERVICE_TIER_UNSPECIFIED"
,    ServiceTierBasic = "SERVICE_TIER_BASIC"
,    ServiceTierPremium = "SERVICE_TIER_PREMIUM"
}


// NotificationChannelDescriptor
/** 
 * A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type.
**/
export class NotificationChannelDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.LabelDescriptor })
  labels?: LabelDescriptor[];

  @Metadata({ data: "json, name=launchStage" })
  launchStage?: NotificationChannelDescriptorLaunchStageEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=supportedTiers" })
  supportedTiers?: NotificationChannelDescriptorSupportedTiersEnum[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
