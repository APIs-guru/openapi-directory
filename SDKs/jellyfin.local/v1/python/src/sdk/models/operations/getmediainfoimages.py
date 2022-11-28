from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMediaInfoImagesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMediaInfoImagesRequest:
    security: GetMediaInfoImagesSecurity = field()
    

@dataclass
class GetMediaInfoImagesResponse:
    content_type: str = field()
    status_code: int = field()
    image_by_name_infos: Optional[List[shared.ImageByNameInfo]] = field(default=None)
    
