import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EndpointBidProtocolEnum {
    BidProtocolUnspecified = "BID_PROTOCOL_UNSPECIFIED",
    GoogleRtb = "GOOGLE_RTB",
    OpenrtbJson = "OPENRTB_JSON",
    OpenrtbProtobuf = "OPENRTB_PROTOBUF",
    Openrtb22 = "OPENRTB_2_2",
    Openrtb23 = "OPENRTB_2_3",
    OpenrtbProtobuf23 = "OPENRTB_PROTOBUF_2_3",
    Openrtb24 = "OPENRTB_2_4",
    OpenrtbProtobuf24 = "OPENRTB_PROTOBUF_2_4",
    Openrtb25 = "OPENRTB_2_5",
    OpenrtbProtobuf25 = "OPENRTB_PROTOBUF_2_5"
}
export declare enum EndpointTradingLocationEnum {
    TradingLocationUnspecified = "TRADING_LOCATION_UNSPECIFIED",
    UsWest = "US_WEST",
    UsEast = "US_EAST",
    Europe = "EUROPE",
    Asia = "ASIA"
}
/**
 * Bidder endpoint that receives bid requests.
**/
export declare class Endpoint extends SpeakeasyBase {
    bidProtocol?: EndpointBidProtocolEnum;
    maximumQps?: string;
    name?: string;
    tradingLocation?: EndpointTradingLocationEnum;
    url?: string;
}
