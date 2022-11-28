from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetChromosomesByAssemblyUsingGetPathParams:
    map_key: int = field(metadata={'path_param': { 'field_name': 'mapKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChromosomesByAssemblyUsingGetRequest:
    path_params: GetChromosomesByAssemblyUsingGetPathParams = field()
    

@dataclass
class GetChromosomesByAssemblyUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
