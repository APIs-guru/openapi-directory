from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMapsUsingGet1PathParams:
    acc_id: str = field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapsUsingGet1Request:
    path_params: GetMapsUsingGet1PathParams = field()
    

@dataclass
class GetMapsUsingGet1Response:
    content_type: str = field()
    status_code: int = field()
    get_maps_using_get_1_200_wildcard_string: Optional[str] = field(default=None)
    
