from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMapsUsingGet1PathParams:
    acc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapsUsingGet1Request:
    path_params: GetMapsUsingGet1PathParams = field(default=None)
    

@dataclass
class GetMapsUsingGet1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_maps_using_get_1_200_wildcard_string: Optional[str] = field(default=None)
    
