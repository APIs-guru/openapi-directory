from dataclasses import dataclass, field



@dataclass
class GetAffectedGenomicModelsUsingGetPathParams:
    taxon_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAffectedGenomicModelsUsingGetRequest:
    path_params: GetAffectedGenomicModelsUsingGetPathParams = field(default=None)
    

@dataclass
class GetAffectedGenomicModelsUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
