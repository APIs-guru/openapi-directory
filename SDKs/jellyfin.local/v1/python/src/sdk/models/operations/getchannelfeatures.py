from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetChannelFeaturesPathParams:
    channel_id: str = field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChannelFeaturesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetChannelFeaturesRequest:
    path_params: GetChannelFeaturesPathParams = field()
    security: GetChannelFeaturesSecurity = field()
    

@dataclass
class GetChannelFeaturesResponse:
    content_type: str = field()
    status_code: int = field()
    channel_features: Optional[shared.ChannelFeatures] = field(default=None)
    
