from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EndpointBidProtocolEnum(str, Enum):
    BID_PROTOCOL_UNSPECIFIED = "BID_PROTOCOL_UNSPECIFIED"
    GOOGLE_RTB = "GOOGLE_RTB"
    OPENRTB_JSON = "OPENRTB_JSON"
    OPENRTB_PROTOBUF = "OPENRTB_PROTOBUF"
    OPENRTB_2_2 = "OPENRTB_2_2"
    OPENRTB_2_3 = "OPENRTB_2_3"
    OPENRTB_PROTOBUF_2_3 = "OPENRTB_PROTOBUF_2_3"
    OPENRTB_2_4 = "OPENRTB_2_4"
    OPENRTB_PROTOBUF_2_4 = "OPENRTB_PROTOBUF_2_4"
    OPENRTB_2_5 = "OPENRTB_2_5"
    OPENRTB_PROTOBUF_2_5 = "OPENRTB_PROTOBUF_2_5"

class EndpointTradingLocationEnum(str, Enum):
    TRADING_LOCATION_UNSPECIFIED = "TRADING_LOCATION_UNSPECIFIED"
    US_WEST = "US_WEST"
    US_EAST = "US_EAST"
    EUROPE = "EUROPE"
    ASIA = "ASIA"


@dataclass_json
@dataclass
class Endpoint:
    r"""Endpoint
    Bidder endpoint that receives bid requests.
    """
    
    bid_protocol: Optional[EndpointBidProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidProtocol') }})
    maximum_qps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumQps') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    trading_location: Optional[EndpointTradingLocationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tradingLocation') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
