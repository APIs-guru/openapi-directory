from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveSentryRiskDataQueryParams:
    is_active: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_active', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrieveSentryRiskDataRequest:
    query_params: RetrieveSentryRiskDataQueryParams = field(default=None)
    

@dataclass
class RetrieveSentryRiskDataResponse:
    content_type: str = field(default=None)
    sentry_object_paging_dto: Optional[shared.SentryObjectPagingDto] = field(default=None)
    status_code: int = field(default=None)
    
