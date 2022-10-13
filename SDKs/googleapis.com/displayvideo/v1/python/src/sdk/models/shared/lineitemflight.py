from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import daterange

class LineItemFlightFlightDateTypeEnum(str, Enum):
    LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED = "LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED"
    LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED = "LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED"
    LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM = "LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM"
    LINE_ITEM_FLIGHT_DATE_TYPE_TRIGGER = "LINE_ITEM_FLIGHT_DATE_TYPE_TRIGGER"


@dataclass_json
@dataclass
class LineItemFlight:
    date_range: Optional[daterange.DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRange' }})
    flight_date_type: Optional[LineItemFlightFlightDateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flightDateType' }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerId' }})
    
