from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetLogEntriesQueryParams:
    has_user_id: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasUserId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    min_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'minDate', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLogEntriesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLogEntriesRequest:
    query_params: GetLogEntriesQueryParams = field()
    security: GetLogEntriesSecurity = field()
    

@dataclass
class GetLogEntriesResponse:
    content_type: str = field()
    status_code: int = field()
    activity_log_entry_query_result: Optional[shared.ActivityLogEntryQueryResult] = field(default=None)
    
