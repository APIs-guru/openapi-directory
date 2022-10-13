from dataclasses import dataclass, field



@dataclass
class GetGenesBySpeciesUsingGetPathParams:
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenesBySpeciesUsingGetRequest:
    path_params: GetGenesBySpeciesUsingGetPathParams = field(default=None)
    

@dataclass
class GetGenesBySpeciesUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
