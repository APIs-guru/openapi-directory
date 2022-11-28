from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class TransportationIncentivesLawsOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    CSV = "csv"


@dataclass
class TransportationIncentivesLawsPathParams:
    output_format: TransportationIncentivesLawsOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'output_format', 'style': 'simple', 'explode': False }})
    

@dataclass
class TransportationIncentivesLawsQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    expired: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expired', 'style': 'form', 'explode': True }})
    incentive_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'incentive_type', 'style': 'form', 'explode': True }})
    jurisdiction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'jurisdiction', 'style': 'form', 'explode': True }})
    keyword: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'keyword', 'style': 'form', 'explode': True }})
    law_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'law_type', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    local: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'local', 'style': 'form', 'explode': True }})
    poc: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'poc', 'style': 'form', 'explode': True }})
    recent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'recent', 'style': 'form', 'explode': True }})
    regulation_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'regulation_type', 'style': 'form', 'explode': True }})
    technology: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'technology', 'style': 'form', 'explode': True }})
    user_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_type', 'style': 'form', 'explode': True }})
    

@dataclass
class TransportationIncentivesLawsRequest:
    path_params: TransportationIncentivesLawsPathParams = field()
    query_params: TransportationIncentivesLawsQueryParams = field()
    

@dataclass
class TransportationIncentivesLawsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
