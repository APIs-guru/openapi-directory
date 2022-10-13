from dataclasses import dataclass, field



@dataclass
class GetMapsBySpeciesUsingGetPathParams:
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapsBySpeciesUsingGetRequest:
    path_params: GetMapsBySpeciesUsingGetPathParams = field(default=None)
    

@dataclass
class GetMapsBySpeciesUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
