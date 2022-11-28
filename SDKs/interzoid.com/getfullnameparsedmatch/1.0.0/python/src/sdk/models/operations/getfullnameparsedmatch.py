from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetfullnameparsedmatchQueryParams:
    firstname: str = field(metadata={'query_param': { 'field_name': 'firstname', 'style': 'form', 'explode': True }})
    lastname: str = field(metadata={'query_param': { 'field_name': 'lastname', 'style': 'form', 'explode': True }})
    license: str = field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Getfullnameparsedmatch200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    simkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Simkey') }})
    

@dataclass
class GetfullnameparsedmatchRequest:
    query_params: GetfullnameparsedmatchQueryParams = field()
    

@dataclass
class GetfullnameparsedmatchResponse:
    content_type: str = field()
    status_code: int = field()
    getfullnameparsedmatch_200_application_json_object: Optional[Getfullnameparsedmatch200ApplicationJSON] = field(default=None)
    
