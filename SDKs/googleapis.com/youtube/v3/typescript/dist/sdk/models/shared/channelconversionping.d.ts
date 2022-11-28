import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChannelConversionPingContextEnum {
    Subscribe = "subscribe",
    Unsubscribe = "unsubscribe",
    Cview = "cview"
}
/**
 * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
**/
export declare class ChannelConversionPing extends SpeakeasyBase {
    context?: ChannelConversionPingContextEnum;
    conversionUrl?: string;
}
