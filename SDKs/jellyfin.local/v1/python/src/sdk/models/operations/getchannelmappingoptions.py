from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetChannelMappingOptionsQueryParams:
    provider_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'providerId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChannelMappingOptionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetChannelMappingOptionsRequest:
    query_params: GetChannelMappingOptionsQueryParams = field()
    security: GetChannelMappingOptionsSecurity = field()
    

@dataclass
class GetChannelMappingOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    channel_mapping_options_dto: Optional[shared.ChannelMappingOptionsDto] = field(default=None)
    
