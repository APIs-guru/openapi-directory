from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetCallResponseLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class GetCallResponseLinks:
    self: Optional[GetCallResponseLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class GetCallResponse:
    links: Optional[GetCallResponseLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    conversation_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversation_uuid') }})
    direction: Optional[DirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    from_: Optional[From] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    to: Optional[To] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    
