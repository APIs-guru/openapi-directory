from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdatePluginSecurityInfoRequests:
    plugin_security_info: Optional[shared.PluginSecurityInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    plugin_security_info1: Optional[shared.PluginSecurityInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    plugin_security_info2: Optional[shared.PluginSecurityInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdatePluginSecurityInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdatePluginSecurityInfoRequest:
    request: UpdatePluginSecurityInfoRequests = field()
    security: UpdatePluginSecurityInfoSecurity = field()
    

@dataclass
class UpdatePluginSecurityInfoResponse:
    content_type: str = field()
    status_code: int = field()
    
