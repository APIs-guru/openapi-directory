from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ListLegs200ApplicationJSONEmbeddedLegs:
    embedded: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    conversation_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_uuid' }})
    from_: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    start_end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_end' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    state: Optional[shared.LegStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    to: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    type: Optional[shared.ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    

@dataclass_json
@dataclass
class ListLegs200ApplicationJSONEmbedded:
    legs: List[ListLegs200ApplicationJSONEmbeddedLegs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legs' }})
    

@dataclass_json
@dataclass
class ListLegs200ApplicationJSONLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class ListLegs200ApplicationJSONLinks:
    self: ListLegs200ApplicationJSONLinksSelf = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class ListLegs200ApplicationJSON:
    embedded: ListLegs200ApplicationJSONEmbedded = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: ListLegs200ApplicationJSONLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    count: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    page_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    record_index: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'record_index' }})
    

@dataclass
class ListLegsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_legs_200_application_json_object: Optional[ListLegs200ApplicationJSON] = field(default=None)
    
