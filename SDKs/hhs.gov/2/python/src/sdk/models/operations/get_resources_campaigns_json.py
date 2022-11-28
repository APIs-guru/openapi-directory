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
    query_params: GetResourcesCampaignsJSONQueryParams = field()
    

@dataclass
class GetResourcesCampaignsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    campaign_wrapped: Optional[shared.CampaignWrapped] = field(default=None)
    
