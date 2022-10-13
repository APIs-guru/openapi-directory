from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetIsosIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIsosIDRequest:
    path_params: GetIsosIDPathParams = field(default=None)
    
class GetIsosID200ApplicationJSONIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class GetIsosID200ApplicationJSONIso:
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: GetIsosID200ApplicationJSONIsoTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetIsosID200ApplicationJSON:
    iso: GetIsosID200ApplicationJSONIso = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso' }})
    

@dataclass
class GetIsosIDResponse:
    content_type: str = field(default=None)
    get_isos_id_200_application_json_object: Optional[GetIsosID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
