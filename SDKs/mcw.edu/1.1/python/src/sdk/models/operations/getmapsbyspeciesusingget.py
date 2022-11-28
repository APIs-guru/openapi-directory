from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMapsBySpeciesUsingGetPathParams:
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapsBySpeciesUsingGetRequest:
    path_params: GetMapsBySpeciesUsingGetPathParams = field()
    

@dataclass
class GetMapsBySpeciesUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
