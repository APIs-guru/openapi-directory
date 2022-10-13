from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetSittingsQueryParams:
    date_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateFrom', 'style': 'form', 'explode': True }})
    date_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateTo', 'style': 'form', 'explode': True }})
    house: Optional[shared.HouseEnum] = field(default=None, metadata={'query_param': { 'field_name': 'House', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSittingsRequest:
    query_params: GetSittingsQueryParams = field(default=None)
    

@dataclass
class GetSittingsResponse:
    bill_stage_sitting_search_result: Optional[shared.BillStageSittingSearchResult] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
