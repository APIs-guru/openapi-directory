from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FaresQueryParams:
    carriers: str = field(metadata={'query_param': { 'field_name': 'carriers', 'style': 'form', 'explode': True }})
    catalogues: str = field(metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    segments: str = field(metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': True }})
    fare_types: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fare-types', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclass
class FaresHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class FaresSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FaresRequest:
    headers: FaresHeaders = field()
    query_params: FaresQueryParams = field()
    security: FaresSecurity = field()
    

@dataclass
class FaresResponse:
    content_type: str = field()
    status_code: int = field()
    fares_200_application_json_string: Optional[str] = field(default=None)
    
