from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLinodeTypePathParams:
    type_id: str = field(default=None, metadata={'path_param': { 'field_name': 'typeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeTypeRequest:
    path_params: GetLinodeTypePathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLinodeTypeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLinodeTypeResponse:
    content_type: str = field(default=None)
    linode_type: Optional[shared.LinodeType] = field(default=None)
    status_code: int = field(default=None)
    get_linode_type_default_application_json_object: Optional[GetLinodeTypeDefaultApplicationJSON] = field(default=None)
    
