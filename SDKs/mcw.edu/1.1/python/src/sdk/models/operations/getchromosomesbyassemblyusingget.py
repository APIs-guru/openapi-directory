from dataclasses import dataclass, field



@dataclass
class GetChromosomesByAssemblyUsingGetPathParams:
    map_key: int = field(default=None, metadata={'path_param': { 'field_name': 'mapKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChromosomesByAssemblyUsingGetRequest:
    path_params: GetChromosomesByAssemblyUsingGetPathParams = field(default=None)
    

@dataclass
class GetChromosomesByAssemblyUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
