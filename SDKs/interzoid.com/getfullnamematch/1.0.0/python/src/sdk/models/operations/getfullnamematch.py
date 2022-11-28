from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetfullnamematchQueryParams:
    fullname: str = field(metadata={'query_param': { 'field_name': 'fullname', 'style': 'form', 'explode': True }})
    license: str = field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Getfullnamematch200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    simkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Simkey') }})
    

@dataclass
class GetfullnamematchRequest:
    query_params: GetfullnamematchQueryParams = field()
    

@dataclass
class GetfullnamematchResponse:
    content_type: str = field()
    status_code: int = field()
    getfullnamematch_200_application_json_object: Optional[Getfullnamematch200ApplicationJSON] = field(default=None)
    
