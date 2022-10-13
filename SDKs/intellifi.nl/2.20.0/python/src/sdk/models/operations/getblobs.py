from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetBlobsQueryParams:
    after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    after_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after_id', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    before_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before_id', 'style': 'form', 'explode': True }})
    blob_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'blob_key', 'style': 'form', 'explode': True }})
    content_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'content_type', 'style': 'form', 'explode': True }})
    filename: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filename', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    from_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from_id', 'style': 'form', 'explode': True }})
    hash: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'hash', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'id_only', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    populate: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'populate', 'style': 'form', 'explode': True }})
    results_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'results_only', 'style': 'form', 'explode': True }})
    select: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'select', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    time_created: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_created', 'style': 'form', 'explode': True }})
    time_last_accessed: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_last_accessed', 'style': 'form', 'explode': True }})
    time_updated: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_updated', 'style': 'form', 'explode': True }})
    timeout_s: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timeout_s', 'style': 'form', 'explode': True }})
    until: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'until', 'style': 'form', 'explode': True }})
    until_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'until_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBlobsRequest:
    query_params: GetBlobsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetBlobs200ApplicationJSON:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    count_current: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count_current' }})
    is_limited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_limited' }})
    next_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_url' }})
    query_duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_duration_ms' }})
    results: Optional[List[shared.Blob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class GetBlobsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_blobs_200_application_json_object: Optional[GetBlobs200ApplicationJSON] = field(default=None)
    
