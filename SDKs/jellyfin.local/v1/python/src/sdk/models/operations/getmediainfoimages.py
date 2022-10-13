from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMediaInfoImagesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMediaInfoImagesRequest:
    security: GetMediaInfoImagesSecurity = field(default=None)
    

@dataclass
class GetMediaInfoImagesResponse:
    content_type: str = field(default=None)
    image_by_name_infos: Optional[List[shared.ImageByNameInfo]] = field(default=None)
    status_code: int = field(default=None)
    
