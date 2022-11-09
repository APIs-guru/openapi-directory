import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ChannelChannelTypeEnum {
    ChannelTypeUnspecified = "CHANNEL_TYPE_UNSPECIFIED",
    Stable = "STABLE",
    Beta = "BETA",
    Dev = "DEV",
    Canary = "CANARY",
    CanaryAsan = "CANARY_ASAN",
    All = "ALL",
    Extended = "EXTENDED"
}
/**
 * Each Channel is owned by a Platform and owns a collection of versions. Possible Channels are listed in the Channel enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
**/
export declare class Channel extends SpeakeasyBase {
    channelType?: ChannelChannelTypeEnum;
    name?: string;
}
