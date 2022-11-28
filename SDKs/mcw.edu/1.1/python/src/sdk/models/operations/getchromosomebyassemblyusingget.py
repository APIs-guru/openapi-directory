from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetChromosomeByAssemblyUsingGetPathParams:
    chromosome: str = field(metadata={'path_param': { 'field_name': 'chromosome', 'style': 'simple', 'explode': False }})
    map_key: int = field(metadata={'path_param': { 'field_name': 'mapKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChromosomeByAssemblyUsingGetRequest:
    path_params: GetChromosomeByAssemblyUsingGetPathParams = field()
    

@dataclass
class GetChromosomeByAssemblyUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
