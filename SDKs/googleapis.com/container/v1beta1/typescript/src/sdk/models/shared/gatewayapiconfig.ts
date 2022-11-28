import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GatewayApiConfigChannelEnum {
    ChannelUnspecified = "CHANNEL_UNSPECIFIED",
    ChannelDisabled = "CHANNEL_DISABLED",
    ChannelExperimental = "CHANNEL_EXPERIMENTAL",
    ChannelStandard = "CHANNEL_STANDARD"
}


// GatewayApiConfig
/** 
 * GatewayAPIConfig contains the desired config of Gateway API on this cluster.
**/
export class GatewayApiConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: GatewayApiConfigChannelEnum;
}
