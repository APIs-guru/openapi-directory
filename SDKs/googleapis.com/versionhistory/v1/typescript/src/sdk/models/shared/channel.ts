import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChannelChannelTypeEnum {
    ChannelTypeUnspecified = "CHANNEL_TYPE_UNSPECIFIED",
    Stable = "STABLE",
    Beta = "BETA",
    Dev = "DEV",
    Canary = "CANARY",
    CanaryAsan = "CANARY_ASAN",
    All = "ALL",
    Extended = "EXTENDED"
}


// Channel
/** 
 * Each Channel is owned by a Platform and owns a collection of versions. Possible Channels are listed in the Channel enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
**/
export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelType" })
  channelType?: ChannelChannelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
