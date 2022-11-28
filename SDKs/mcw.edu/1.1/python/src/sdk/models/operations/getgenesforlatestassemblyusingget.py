from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGenesForLatestAssemblyUsingGetPathParams:
    taxon_id: str = field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenesForLatestAssemblyUsingGetRequest:
    path_params: GetGenesForLatestAssemblyUsingGetPathParams = field()
    

@dataclass
class GetGenesForLatestAssemblyUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
