from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetcurrencyrateQueryParams:
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    symbol: str = field(default=None, metadata={'query_param': { 'field_name': 'symbol', 'style': 'form', 'explode': True }})
    

@dataclass
class GetcurrencyrateRequest:
    query_params: GetcurrencyrateQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getcurrencyrate200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rate' }})
    symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Symbol' }})
    

@dataclass
class GetcurrencyrateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getcurrencyrate_200_application_json_object: Optional[Getcurrencyrate200ApplicationJSON] = field(default=None)
    
