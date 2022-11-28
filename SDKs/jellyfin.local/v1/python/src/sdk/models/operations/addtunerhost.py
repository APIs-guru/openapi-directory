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
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddTunerHostRequest:
    security: AddTunerHostSecurity = field()
    request: Optional[AddTunerHostRequests] = field(default=None)
    

@dataclass
class AddTunerHostResponse:
    content_type: str = field()
    status_code: int = field()
    tuner_host_info: Optional[shared.TunerHostInfo] = field(default=None)
    
