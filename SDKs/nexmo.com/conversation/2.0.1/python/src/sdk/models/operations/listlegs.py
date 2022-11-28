from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class ListLegs200ApplicationJSONEmbeddedLegs:
    uuid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    embedded: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    conversation_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversation_uuid') }})
    from_: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    start_end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_end') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    state: Optional[shared.LegStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    to: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    type: Optional[shared.ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ListLegs200ApplicationJSONEmbedded:
    r"""ListLegs200ApplicationJSONEmbedded
    A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
    """
    
    legs: List[ListLegs200ApplicationJSONEmbeddedLegs] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('legs') }})
    

@dataclass_json
@dataclass
class ListLegs200ApplicationJSONLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class ListLegs200ApplicationJSONLinks:
    self: ListLegs200ApplicationJSONLinksSelf = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class ListLegs200ApplicationJSON:
    r"""ListLegs200ApplicationJSON
    List Legs Response Payload Object
    """
    
    embedded: ListLegs200ApplicationJSONEmbedded = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: ListLegs200ApplicationJSONLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    count: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    page_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    record_index: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_index') }})
    

@dataclass
class ListLegsResponse:
    content_type: str = field()
    status_code: int = field()
    list_legs_200_application_json_object: Optional[ListLegs200ApplicationJSON] = field(default=None)
    
