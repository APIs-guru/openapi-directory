from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetfullnameparsedmatchQueryParams:
    firstname: str = field(default=None, metadata={'query_param': { 'field_name': 'firstname', 'style': 'form', 'explode': True }})
    lastname: str = field(default=None, metadata={'query_param': { 'field_name': 'lastname', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass
class GetfullnameparsedmatchRequest:
    query_params: GetfullnameparsedmatchQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getfullnameparsedmatch200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    simkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Simkey' }})
    

@dataclass
class GetfullnameparsedmatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getfullnameparsedmatch_200_application_json_object: Optional[Getfullnameparsedmatch200ApplicationJSON] = field(default=None)
    
