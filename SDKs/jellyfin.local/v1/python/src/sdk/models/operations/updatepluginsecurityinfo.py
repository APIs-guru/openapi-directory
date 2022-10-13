from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdatePluginSecurityInfoRequests:
    plugin_security_info: Optional[shared.PluginSecurityInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    plugin_security_info1: Optional[shared.PluginSecurityInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    plugin_security_info2: Optional[shared.PluginSecurityInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdatePluginSecurityInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdatePluginSecurityInfoRequest:
    request: UpdatePluginSecurityInfoRequests = field(default=None)
    security: UpdatePluginSecurityInfoSecurity = field(default=None)
    

@dataclass
class UpdatePluginSecurityInfoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
