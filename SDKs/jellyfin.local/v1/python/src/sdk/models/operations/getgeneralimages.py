from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetGeneralImagesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetGeneralImagesRequest:
    security: GetGeneralImagesSecurity = field()
    

@dataclass
class GetGeneralImagesResponse:
    content_type: str = field()
    status_code: int = field()
    image_by_name_infos: Optional[List[shared.ImageByNameInfo]] = field(default=None)
    
