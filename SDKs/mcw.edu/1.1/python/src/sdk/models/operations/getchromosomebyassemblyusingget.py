from dataclasses import dataclass, field



@dataclass
class GetChromosomeByAssemblyUsingGetPathParams:
    chromosome: str = field(default=None, metadata={'path_param': { 'field_name': 'chromosome', 'style': 'simple', 'explode': False }})
    map_key: int = field(default=None, metadata={'path_param': { 'field_name': 'mapKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChromosomeByAssemblyUsingGetRequest:
    path_params: GetChromosomeByAssemblyUsingGetPathParams = field(default=None)
    

@dataclass
class GetChromosomeByAssemblyUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
