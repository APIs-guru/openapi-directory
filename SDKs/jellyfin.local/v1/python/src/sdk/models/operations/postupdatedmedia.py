from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostUpdatedMediaRequests:
    media_update_info_dtos: Optional[List[shared.MediaUpdateInfoDto]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    media_update_info_dtos1: Optional[List[shared.MediaUpdateInfoDto]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    media_update_info_dtos2: Optional[List[shared.MediaUpdateInfoDto]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostUpdatedMediaSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUpdatedMediaRequest:
    request: PostUpdatedMediaRequests = field()
    security: PostUpdatedMediaSecurity = field()
    

@dataclass
class PostUpdatedMediaResponse:
    content_type: str = field()
    status_code: int = field()
    
