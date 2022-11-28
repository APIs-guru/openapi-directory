import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDescriptor } from "./labeldescriptor";
export declare enum NotificationChannelDescriptorLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
export declare enum NotificationChannelDescriptorSupportedTiersEnum {
    ServiceTierUnspecified = "SERVICE_TIER_UNSPECIFIED",
    ServiceTierBasic = "SERVICE_TIER_BASIC",
    ServiceTierPremium = "SERVICE_TIER_PREMIUM"
}
/**
 * A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type.
**/
export declare class NotificationChannelDescriptor extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    labels?: LabelDescriptor[];
    launchStage?: NotificationChannelDescriptorLaunchStageEnum;
    name?: string;
    supportedTiers?: NotificationChannelDescriptorSupportedTiersEnum[];
    type?: string;
}
