from dataclasses import dataclass, field



@dataclass
class GetGenesForLatestAssemblyUsingGetPathParams:
    taxon_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenesForLatestAssemblyUsingGetRequest:
    path_params: GetGenesForLatestAssemblyUsingGetPathParams = field(default=None)
    

@dataclass
class GetGenesForLatestAssemblyUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
