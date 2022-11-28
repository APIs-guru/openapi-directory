from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetChannelMappingRequests:
    set_channel_mapping_dto: Optional[shared.SetChannelMappingDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    set_channel_mapping_dto1: Optional[shared.SetChannelMappingDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    set_channel_mapping_dto2: Optional[shared.SetChannelMappingDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SetChannelMappingSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SetChannelMappingRequest:
    request: SetChannelMappingRequests = field()
    security: SetChannelMappingSecurity = field()
    

@dataclass
class SetChannelMappingResponse:
    content_type: str = field()
    status_code: int = field()
    tuner_channel_mapping: Optional[shared.TunerChannelMapping] = field(default=None)
    
