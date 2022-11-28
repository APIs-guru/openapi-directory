from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetWorkspaceIDReportsPathParams:
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceIDReportsQueryParams:
    activity_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'activity_type', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWorkspaceIDReportsSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDReportsRequest:
    path_params: GetWorkspaceIDReportsPathParams = field()
    query_params: GetWorkspaceIDReportsQueryParams = field()
    security: GetWorkspaceIDReportsSecurity = field()
    

@dataclass
class GetWorkspaceIDReportsResponse:
    content_type: str = field()
    status_code: int = field()
    
