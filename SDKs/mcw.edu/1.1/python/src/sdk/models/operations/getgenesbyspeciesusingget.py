from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGenesBySpeciesUsingGetPathParams:
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenesBySpeciesUsingGetRequest:
    path_params: GetGenesBySpeciesUsingGetPathParams = field()
    

@dataclass
class GetGenesBySpeciesUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
