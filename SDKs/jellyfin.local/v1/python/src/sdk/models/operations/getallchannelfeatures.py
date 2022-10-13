from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllChannelFeaturesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAllChannelFeaturesRequest:
    security: GetAllChannelFeaturesSecurity = field(default=None)
    

@dataclass
class GetAllChannelFeaturesResponse:
    channel_features: Optional[List[shared.ChannelFeatures]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
