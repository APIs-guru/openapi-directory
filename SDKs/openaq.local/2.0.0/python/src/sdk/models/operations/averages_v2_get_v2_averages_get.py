from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AveragesV2GetV2AveragesGetQueryParams:
    spatial: shared.SpatialEnum = field(metadata={'query_param': { 'field_name': 'spatial', 'style': 'form', 'explode': True }})
    temporal: shared.TemporalEnum = field(metadata={'query_param': { 'field_name': 'temporal', 'style': 'form', 'explode': True }})
    country: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    country_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country_id', 'style': 'form', 'explode': True }})
    date_from: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    group: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    parameter: Optional[List[Any]] = field(default=None, metadata={'query_param': { 'field_name': 'parameter', 'style': 'form', 'explode': True }})
    parameter_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parameter_id', 'style': 'form', 'explode': True }})
    project: Optional[List[Any]] = field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    project_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'project_id', 'style': 'form', 'explode': True }})
    sort: Optional[shared.SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    unit: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    

@dataclass
class AveragesV2GetV2AveragesGetRequest:
    query_params: AveragesV2GetV2AveragesGetQueryParams = field()
    

@dataclass
class AveragesV2GetV2AveragesGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    open_aq_result: Optional[shared.OpenAqResult] = field(default=None)
    
