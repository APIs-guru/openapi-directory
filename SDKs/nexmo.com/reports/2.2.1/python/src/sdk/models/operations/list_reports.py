from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ListReportsQueryParams:
    account_id: str = field(default=None, metadata={'query_param': { 'field_name': 'account_id', 'style': 'form', 'explode': True }})
    date_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    status: str = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListReportsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListReportsRequest:
    query_params: ListReportsQueryParams = field(default=None)
    security: ListReportsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListReports200ApplicationJSON:
    items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_count' }})
    reports: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reports' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self_link' }})
    

@dataclass
class ListReportsResponses:
    list_reports_200_application_json_object: Optional[ListReports200ApplicationJSON] = field(default=None)
    list_reports_400_application_json_any: Optional[Any] = field(default=None)
    list_reports_401_application_json_any: Optional[Any] = field(default=None)
    

@dataclass
class ListReportsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListReportsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
