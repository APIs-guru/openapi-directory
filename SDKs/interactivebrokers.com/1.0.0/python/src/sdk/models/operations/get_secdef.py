from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetSecdefRequestBody:
    conid: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conid' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    exchange: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exchange' }})
    symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbol' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class GetSecdefRequest:
    request: GetSecdefRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class GetSecdef200ApplicationJSON:
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompanyName' }})
    contract_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContractId' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    exchange: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Exchange' }})
    security_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityType' }})
    ticker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ticker' }})
    

@dataclass
class GetSecdefResponse:
    content_type: str = field(default=None)
    get_secdef_200_application_json_objects: Optional[List[GetSecdef200ApplicationJSON]] = field(default=None)
    status_code: int = field(default=None)
    
