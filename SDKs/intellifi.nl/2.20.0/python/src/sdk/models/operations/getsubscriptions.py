from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSubscriptionsQueryParams:
    after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    after_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after_id', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    before_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before_id', 'style': 'form', 'explode': True }})
    database_hold_time_h: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'database_hold_time_h', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    from_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from_id', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'id_only', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    populate: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'populate', 'style': 'form', 'explode': True }})
    populate_events: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'populate_events', 'style': 'form', 'explode': True }})
    results_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'results_only', 'style': 'form', 'explode': True }})
    select: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'select', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    time_created: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_created', 'style': 'form', 'explode': True }})
    time_updated: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_updated', 'style': 'form', 'explode': True }})
    timeout_s: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timeout_s', 'style': 'form', 'explode': True }})
    topic_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'topic_filter', 'style': 'form', 'explode': True }})
    until: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'until', 'style': 'form', 'explode': True }})
    until_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'until_id', 'style': 'form', 'explode': True }})
    verify_target_certificate: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'verify_target_certificate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubscriptionsRequest:
    query_params: GetSubscriptionsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetSubscriptions200ApplicationJSON:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    count_current: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count_current' }})
    is_limited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_limited' }})
    next_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_url' }})
    query_duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_duration_ms' }})
    results: Optional[List[shared.Subscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class GetSubscriptionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_subscriptions_200_application_json_object: Optional[GetSubscriptions200ApplicationJSON] = field(default=None)
    
