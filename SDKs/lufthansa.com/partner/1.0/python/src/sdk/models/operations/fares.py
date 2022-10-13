from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FaresQueryParams:
    carriers: str = field(default=None, metadata={'query_param': { 'field_name': 'carriers', 'style': 'form', 'explode': True }})
    catalogues: str = field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    fare_types: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fare-types', 'style': 'form', 'explode': True }})
    segments: str = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclass
class FaresHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class FaresSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FaresRequest:
    query_params: FaresQueryParams = field(default=None)
    headers: FaresHeaders = field(default=None)
    security: FaresSecurity = field(default=None)
    

@dataclass
class FaresResponse:
    content_type: str = field(default=None)
    fares_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
