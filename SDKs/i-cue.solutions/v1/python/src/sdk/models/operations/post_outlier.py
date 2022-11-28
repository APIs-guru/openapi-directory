from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostOutlierHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOutlierRequests:
    outliers_request: Optional[shared.OutliersRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    outliers_request1: Optional[shared.OutliersRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    outliers_request2: Optional[shared.OutliersRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostOutlierRequest:
    headers: PostOutlierHeaders = field()
    request: Optional[PostOutlierRequests] = field(default=None)
    

@dataclass
class PostOutlierResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    time_series_outliers_responses: Optional[List[shared.TimeSeriesOutliersResponse]] = field(default=None)
    
