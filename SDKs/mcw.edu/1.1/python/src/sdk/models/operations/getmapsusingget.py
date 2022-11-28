from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMapsUsingGetPathParams:
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapsUsingGetRequest:
    path_params: GetMapsUsingGetPathParams = field()
    

@dataclass
class GetMapsUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
