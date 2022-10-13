from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ReportsIndexPathParams:
    report_type: str = field(default=None, metadata={'path_param': { 'field_name': 'report_type', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReportsIndexQueryParams:
    end_date: str = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    page: int = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: int = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    report_sub_type_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'reportSubTypeId', 'style': 'form', 'explode': True }})
    sites: str = field(default=None, metadata={'query_param': { 'field_name': 'sites', 'style': 'form', 'explode': True }})
    start_date: str = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportsIndexRequest:
    path_params: ReportsIndexPathParams = field(default=None)
    query_params: ReportsIndexQueryParams = field(default=None)
    

@dataclass
class ReportsIndexResponse:
    content_type: str = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
