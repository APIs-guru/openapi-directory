from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetareacodeQueryParams:
    areacode: str = field(default=None, metadata={'query_param': { 'field_name': 'areacode', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass
class GetareacodeRequest:
    query_params: GetareacodeQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getareacode200ApplicationJSON:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Abbreviation' }})
    area_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AreaCode' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Locale' }})
    primary_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryCity' }})
    

@dataclass
class GetareacodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getareacode_200_application_json_object: Optional[Getareacode200ApplicationJSON] = field(default=None)
    
