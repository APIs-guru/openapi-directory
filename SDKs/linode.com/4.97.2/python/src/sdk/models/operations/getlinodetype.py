from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLinodeTypePathParams:
    type_id: str = field(metadata={'path_param': { 'field_name': 'typeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetLinodeTypeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLinodeTypeRequest:
    path_params: GetLinodeTypePathParams = field()
    

@dataclass
class GetLinodeTypeResponse:
    content_type: str = field()
    status_code: int = field()
    linode_type: Optional[shared.LinodeType] = field(default=None)
    get_linode_type_default_application_json_object: Optional[GetLinodeTypeDefaultApplicationJSON] = field(default=None)
    
