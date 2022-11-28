from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetaddressmatchQueryParams:
    address: str = field(metadata={'query_param': { 'field_name': 'address', 'style': 'form', 'explode': True }})
    license: str = field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Getaddressmatch200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    simkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Simkey') }})
    

@dataclass
class GetaddressmatchRequest:
    query_params: GetaddressmatchQueryParams = field()
    

@dataclass
class GetaddressmatchResponse:
    content_type: str = field()
    status_code: int = field()
    getaddressmatch_200_application_json_object: Optional[Getaddressmatch200ApplicationJSON] = field(default=None)
    
