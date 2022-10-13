from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddTunerHostRequests:
    tuner_host_info: Optional[shared.TunerHostInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    tuner_host_info1: Optional[shared.TunerHostInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tuner_host_info2: Optional[shared.TunerHostInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AddTunerHostSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddTunerHostRequest:
    request: Optional[AddTunerHostRequests] = field(default=None)
    security: AddTunerHostSecurity = field(default=None)
    

@dataclass
class AddTunerHostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tuner_host_info: Optional[shared.TunerHostInfo] = field(default=None)
    
