from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetWorkspaceIDReportsPathParams:
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceIDReportsQueryParams:
    activity_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'activity_type', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWorkspaceIDReportsSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDReportsRequest:
    path_params: GetWorkspaceIDReportsPathParams = field(default=None)
    query_params: GetWorkspaceIDReportsQueryParams = field(default=None)
    security: GetWorkspaceIDReportsSecurity = field(default=None)
    

@dataclass
class GetWorkspaceIDReportsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
