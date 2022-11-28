from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RefreshLibrarySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RefreshLibraryRequest:
    security: RefreshLibrarySecurity = field()
    

@dataclass
class RefreshLibraryResponse:
    content_type: str = field()
    status_code: int = field()
    
