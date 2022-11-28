from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class GetLinodeTypes200ApplicationJSON:
    data: Optional[List[shared.LinodeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetLinodeTypesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLinodeTypesResponse:
    content_type: str = field()
    status_code: int = field()
    get_linode_types_200_application_json_object: Optional[GetLinodeTypes200ApplicationJSON] = field(default=None)
    get_linode_types_default_application_json_object: Optional[GetLinodeTypesDefaultApplicationJSON] = field(default=None)
    
