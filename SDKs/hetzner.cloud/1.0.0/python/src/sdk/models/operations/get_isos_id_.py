from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetIsosIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetIsosID200ApplicationJSONIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class GetIsosID200ApplicationJSONIso:
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: GetIsosID200ApplicationJSONIsoTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetIsosID200ApplicationJSON:
    iso: GetIsosID200ApplicationJSONIso = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    

@dataclass
class GetIsosIDRequest:
    path_params: GetIsosIDPathParams = field()
    

@dataclass
class GetIsosIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_isos_id_200_application_json_object: Optional[GetIsosID200ApplicationJSON] = field(default=None)
    
