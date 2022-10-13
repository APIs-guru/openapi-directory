from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetstateabbreviationQueryParams:
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    state: str = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetstateabbreviationRequest:
    query_params: GetstateabbreviationQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getstateabbreviation200ApplicationJSON:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Abbreviation' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    

@dataclass
class GetstateabbreviationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getstateabbreviation_200_application_json_object: Optional[Getstateabbreviation200ApplicationJSON] = field(default=None)
    
