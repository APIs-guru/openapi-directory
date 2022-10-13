from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateLibraryOptionsRequests:
    update_library_options_dto: Optional[shared.UpdateLibraryOptionsDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_library_options_dto1: Optional[shared.UpdateLibraryOptionsDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_library_options_dto2: Optional[shared.UpdateLibraryOptionsDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateLibraryOptionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateLibraryOptionsRequest:
    request: Optional[UpdateLibraryOptionsRequests] = field(default=None)
    security: UpdateLibraryOptionsSecurity = field(default=None)
    

@dataclass
class UpdateLibraryOptionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
