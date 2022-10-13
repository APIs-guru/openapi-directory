from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetglobalnumberinfoQueryParams:
    intlnumber: str = field(default=None, metadata={'query_param': { 'field_name': 'intlnumber', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass
class GetglobalnumberinfoRequest:
    query_params: GetglobalnumberinfoQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getglobalnumberinfo200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    language2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Language2' }})
    language3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Language3' }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mobile' }})
    primary_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryCity' }})
    primary_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryLanguage' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    wealth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Wealth' }})
    

@dataclass
class GetglobalnumberinfoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getglobalnumberinfo_200_application_json_object: Optional[Getglobalnumberinfo200ApplicationJSON] = field(default=None)
    
