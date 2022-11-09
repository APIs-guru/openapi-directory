import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EndpointBidProtocolEnum {
    BidProtocolUnspecified = "BID_PROTOCOL_UNSPECIFIED"
,    GoogleRtb = "GOOGLE_RTB"
,    Openrtb22 = "OPENRTB_2_2"
,    Openrtb23 = "OPENRTB_2_3"
,    OpenrtbProtobuf23 = "OPENRTB_PROTOBUF_2_3"
,    Openrtb24 = "OPENRTB_2_4"
,    OpenrtbProtobuf24 = "OPENRTB_PROTOBUF_2_4"
,    Openrtb25 = "OPENRTB_2_5"
,    OpenrtbProtobuf25 = "OPENRTB_PROTOBUF_2_5"
}

export enum EndpointTradingLocationEnum {
    TradingLocationUnspecified = "TRADING_LOCATION_UNSPECIFIED"
,    UsWest = "US_WEST"
,    UsEast = "US_EAST"
,    Europe = "EUROPE"
,    Asia = "ASIA"
}


// Endpoint
/** 
 * Bidder endpoint that receives bid requests.
**/
export class Endpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidProtocol" })
  bidProtocol?: EndpointBidProtocolEnum;

  @Metadata({ data: "json, name=maximumQps" })
  maximumQps?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tradingLocation" })
  tradingLocation?: EndpointTradingLocationEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
