import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChannelConversionPingContextEnum {
    Subscribe = "subscribe"
,    Unsubscribe = "unsubscribe"
,    Cview = "cview"
}


// ChannelConversionPing
/** 
 * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
**/
export class ChannelConversionPing extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: ChannelConversionPingContextEnum;

  @Metadata({ data: "json, name=conversionUrl" })
  conversionUrl?: string;
}
