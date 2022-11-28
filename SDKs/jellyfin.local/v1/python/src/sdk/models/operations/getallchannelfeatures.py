from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllChannelFeaturesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAllChannelFeaturesRequest:
    security: GetAllChannelFeaturesSecurity = field()
    

@dataclass
class GetAllChannelFeaturesResponse:
    content_type: str = field()
    status_code: int = field()
    channel_features: Optional[List[shared.ChannelFeatures]] = field(default=None)
    
