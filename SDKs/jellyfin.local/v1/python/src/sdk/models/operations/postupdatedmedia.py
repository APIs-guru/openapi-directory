from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostUpdatedMediaRequests:
    media_update_info_dtos: Optional[List[shared.MediaUpdateInfoDto]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    media_update_info_dtos1: Optional[List[shared.MediaUpdateInfoDto]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    media_update_info_dtos2: Optional[List[shared.MediaUpdateInfoDto]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostUpdatedMediaSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUpdatedMediaRequest:
    request: PostUpdatedMediaRequests = field(default=None)
    security: PostUpdatedMediaSecurity = field(default=None)
    

@dataclass
class PostUpdatedMediaResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
