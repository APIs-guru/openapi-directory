from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetResourcesCampaignsJSONQueryParams:
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesCampaignsJSONRequest:
    query_params: GetResourcesCampaignsJSONQueryParams = field(default=None)
    

@dataclass
class GetResourcesCampaignsJSONResponse:
    campaign_wrapped: Optional[shared.CampaignWrapped] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
