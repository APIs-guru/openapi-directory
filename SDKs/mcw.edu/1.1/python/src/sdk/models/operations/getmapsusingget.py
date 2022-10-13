from dataclasses import dataclass, field



@dataclass
class GetMapsUsingGetPathParams:
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapsUsingGetRequest:
    path_params: GetMapsUsingGetPathParams = field(default=None)
    

@dataclass
class GetMapsUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
