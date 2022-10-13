from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetResourcesCampaignsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesCampaignsIDJSONRequest:
    path_params: GetResourcesCampaignsIDJSONPathParams = field(default=None)
    

@dataclass
class GetResourcesCampaignsIDJSONResponse:
    campaign_wrapped: Optional[shared.CampaignWrapped] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
