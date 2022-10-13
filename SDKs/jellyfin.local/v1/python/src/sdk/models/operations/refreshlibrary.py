from dataclasses import dataclass, field



@dataclass
class RefreshLibrarySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RefreshLibraryRequest:
    security: RefreshLibrarySecurity = field(default=None)
    

@dataclass
class RefreshLibraryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
