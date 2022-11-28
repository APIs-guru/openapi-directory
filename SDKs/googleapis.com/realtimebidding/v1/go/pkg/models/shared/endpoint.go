package shared

type EndpointBidProtocolEnum string

const (
	EndpointBidProtocolEnumBidProtocolUnspecified EndpointBidProtocolEnum = "BID_PROTOCOL_UNSPECIFIED"
	EndpointBidProtocolEnumGoogleRtb              EndpointBidProtocolEnum = "GOOGLE_RTB"
	EndpointBidProtocolEnumOpenrtbJSON            EndpointBidProtocolEnum = "OPENRTB_JSON"
	EndpointBidProtocolEnumOpenrtbProtobuf        EndpointBidProtocolEnum = "OPENRTB_PROTOBUF"
	EndpointBidProtocolEnumOpenrtb22              EndpointBidProtocolEnum = "OPENRTB_2_2"
	EndpointBidProtocolEnumOpenrtb23              EndpointBidProtocolEnum = "OPENRTB_2_3"
	EndpointBidProtocolEnumOpenrtbProtobuf23      EndpointBidProtocolEnum = "OPENRTB_PROTOBUF_2_3"
	EndpointBidProtocolEnumOpenrtb24              EndpointBidProtocolEnum = "OPENRTB_2_4"
	EndpointBidProtocolEnumOpenrtbProtobuf24      EndpointBidProtocolEnum = "OPENRTB_PROTOBUF_2_4"
	EndpointBidProtocolEnumOpenrtb25              EndpointBidProtocolEnum = "OPENRTB_2_5"
	EndpointBidProtocolEnumOpenrtbProtobuf25      EndpointBidProtocolEnum = "OPENRTB_PROTOBUF_2_5"
)

type EndpointTradingLocationEnum string

const (
	EndpointTradingLocationEnumTradingLocationUnspecified EndpointTradingLocationEnum = "TRADING_LOCATION_UNSPECIFIED"
	EndpointTradingLocationEnumUsWest                     EndpointTradingLocationEnum = "US_WEST"
	EndpointTradingLocationEnumUsEast                     EndpointTradingLocationEnum = "US_EAST"
	EndpointTradingLocationEnumEurope                     EndpointTradingLocationEnum = "EUROPE"
	EndpointTradingLocationEnumAsia                       EndpointTradingLocationEnum = "ASIA"
)

// Endpoint
// Bidder endpoint that receives bid requests.
type Endpoint struct {
	BidProtocol     *EndpointBidProtocolEnum     `json:"bidProtocol,omitempty"`
	MaximumQPS      *string                      `json:"maximumQps,omitempty"`
	Name            *string                      `json:"name,omitempty"`
	TradingLocation *EndpointTradingLocationEnum `json:"tradingLocation,omitempty"`
	URL             *string                      `json:"url,omitempty"`
}
