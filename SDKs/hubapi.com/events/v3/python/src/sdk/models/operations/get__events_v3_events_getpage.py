from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventsV3EventsGetPageQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    event_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'eventType', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    object_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'objectId', 'style': 'form', 'explode': True }})
    object_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'objectType', 'style': 'form', 'explode': True }})
    occurred_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'occurredAfter', 'style': 'form', 'explode': True }})
    occurred_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'occurredBefore', 'style': 'form', 'explode': True }})
    sort: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEventsV3EventsGetPageSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetEventsV3EventsGetPageSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEventsV3EventsGetPageSecurity:
    option1: Optional[GetEventsV3EventsGetPageSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetEventsV3EventsGetPageSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetEventsV3EventsGetPageRequest:
    query_params: GetEventsV3EventsGetPageQueryParams = field(default=None)
    security: GetEventsV3EventsGetPageSecurity = field(default=None)
    

@dataclass
class GetEventsV3EventsGetPageResponse:
    body: bytes = field(default=None)
    collection_response_external_unified_event: Optional[shared.CollectionResponseExternalUnifiedEvent] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
