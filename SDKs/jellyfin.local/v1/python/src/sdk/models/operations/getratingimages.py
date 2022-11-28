from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRatingImagesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRatingImagesRequest:
    security: GetRatingImagesSecurity = field()
    

@dataclass
class GetRatingImagesResponse:
    content_type: str = field()
    status_code: int = field()
    image_by_name_infos: Optional[List[shared.ImageByNameInfo]] = field(default=None)
    
