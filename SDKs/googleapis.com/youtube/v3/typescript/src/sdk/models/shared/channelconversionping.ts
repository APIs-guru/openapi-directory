import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChannelConversionPingContextEnum {
    Subscribe = "subscribe",
    Unsubscribe = "unsubscribe",
    Cview = "cview"
}


// ChannelConversionPing
/** 
 * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
**/
export class ChannelConversionPing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ChannelConversionPingContextEnum;

  @SpeakeasyMetadata({ data: "json, name=conversionUrl" })
  conversionUrl?: string;
}
