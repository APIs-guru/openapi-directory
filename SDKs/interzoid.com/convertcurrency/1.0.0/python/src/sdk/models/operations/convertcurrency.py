from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class ConvertcurrencyQueryParams:
    amount: str = field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    from_: str = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    to: str = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class ConvertcurrencyRequest:
    query_params: ConvertcurrencyQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Convertcurrency200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    converted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Converted' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass
class ConvertcurrencyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    convertcurrency_200_application_json_object: Optional[Convertcurrency200ApplicationJSON] = field(default=None)
    
