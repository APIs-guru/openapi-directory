from dataclasses import dataclass, field



@dataclass
class GetGenesAnnotatedUsingGetPathParams:
    acc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenesAnnotatedUsingGetRequest:
    path_params: GetGenesAnnotatedUsingGetPathParams = field(default=None)
    

@dataclass
class GetGenesAnnotatedUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
