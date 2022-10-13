from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetChannelMappingOptionsQueryParams:
    provider_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'providerId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChannelMappingOptionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetChannelMappingOptionsRequest:
    query_params: GetChannelMappingOptionsQueryParams = field(default=None)
    security: GetChannelMappingOptionsSecurity = field(default=None)
    

@dataclass
class GetChannelMappingOptionsResponse:
    channel_mapping_options_dto: Optional[shared.ChannelMappingOptionsDto] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
