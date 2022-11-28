from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetResourcesCampaignsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesCampaignsIDJSONRequest:
    path_params: GetResourcesCampaignsIDJSONPathParams = field()
    

@dataclass
class GetResourcesCampaignsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    campaign_wrapped: Optional[shared.CampaignWrapped] = field(default=None)
    
