from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetChannelFeaturesPathParams:
    channel_id: str = field(default=None, metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChannelFeaturesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetChannelFeaturesRequest:
    path_params: GetChannelFeaturesPathParams = field(default=None)
    security: GetChannelFeaturesSecurity = field(default=None)
    

@dataclass
class GetChannelFeaturesResponse:
    channel_features: Optional[shared.ChannelFeatures] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
