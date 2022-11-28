import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GatewayApiConfigChannelEnum {
    ChannelUnspecified = "CHANNEL_UNSPECIFIED",
    ChannelDisabled = "CHANNEL_DISABLED",
    ChannelExperimental = "CHANNEL_EXPERIMENTAL",
    ChannelStandard = "CHANNEL_STANDARD"
}
/**
 * GatewayAPIConfig contains the desired config of Gateway API on this cluster.
**/
export declare class GatewayApiConfig extends SpeakeasyBase {
    channel?: GatewayApiConfigChannelEnum;
}
