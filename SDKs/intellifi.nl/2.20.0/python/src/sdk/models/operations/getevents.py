from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetEventsQueryParams:
    after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    after_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after_id', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    before_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before_id', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    from_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from_id', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'id_only', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    populate: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'populate', 'style': 'form', 'explode': True }})
    results_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'results_only', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    time_created: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_created', 'style': 'form', 'explode': True }})
    time_event: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_event', 'style': 'form', 'explode': True }})
    time_expire: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_expire', 'style': 'form', 'explode': True }})
    timeout_s: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timeout_s', 'style': 'form', 'explode': True }})
    topic_action: Optional[shared.EventTopicActionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'topic.action', 'style': 'form', 'explode': True }})
    topic_resource: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'topic.resource', 'style': 'form', 'explode': True }})
    topic_resource_type: Optional[shared.EventTopicResourceTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'topic.resource_type', 'style': 'form', 'explode': True }})
    until: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'until', 'style': 'form', 'explode': True }})
    until_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'until_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEventsRequest:
    query_params: GetEventsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetEvents200ApplicationJSON:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    count_current: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count_current' }})
    is_limited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_limited' }})
    next_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_url' }})
    query_duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_duration_ms' }})
    results: Optional[List[shared.Event]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class GetEventsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_events_200_application_json_object: Optional[GetEvents200ApplicationJSON] = field(default=None)
    
