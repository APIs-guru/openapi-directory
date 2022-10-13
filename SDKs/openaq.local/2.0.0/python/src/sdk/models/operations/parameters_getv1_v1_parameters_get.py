from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ParametersGetv1V1ParametersGetQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[shared.SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'sourceId', 'style': 'form', 'explode': True }})
    source_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sourceName', 'style': 'form', 'explode': True }})
    source_slug: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sourceSlug', 'style': 'form', 'explode': True }})
    

@dataclass
class ParametersGetv1V1ParametersGetRequest:
    query_params: ParametersGetv1V1ParametersGetQueryParams = field(default=None)
    

@dataclass
class ParametersGetv1V1ParametersGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    open_aq_parameters_result: Optional[shared.OpenAqParametersResult] = field(default=None)
    status_code: int = field(default=None)
    
