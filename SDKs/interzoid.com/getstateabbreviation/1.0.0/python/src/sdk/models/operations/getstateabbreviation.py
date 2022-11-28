from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetstateabbreviationQueryParams:
    license: str = field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    state: str = field(metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Getstateabbreviation200ApplicationJSON:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Abbreviation') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    

@dataclass
class GetstateabbreviationRequest:
    query_params: GetstateabbreviationQueryParams = field()
    

@dataclass
class GetstateabbreviationResponse:
    content_type: str = field()
    status_code: int = field()
    getstateabbreviation_200_application_json_object: Optional[Getstateabbreviation200ApplicationJSON] = field(default=None)
    
