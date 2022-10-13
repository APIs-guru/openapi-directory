from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class PostCapabilitiesQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    playable_media_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'playableMediaTypes', 'style': 'form', 'explode': True }})
    supported_commands: Optional[List[shared.GeneralCommandTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'supportedCommands', 'style': 'form', 'explode': True }})
    supports_media_control: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsMediaControl', 'style': 'form', 'explode': True }})
    supports_persistent_identifier: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsPersistentIdentifier', 'style': 'form', 'explode': True }})
    supports_sync: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsSync', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCapabilitiesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostCapabilitiesRequest:
    query_params: PostCapabilitiesQueryParams = field(default=None)
    security: PostCapabilitiesSecurity = field(default=None)
    

@dataclass
class PostCapabilitiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
