from dataclasses import dataclass, field



@dataclass
class GetActiveObjectCountUsingGetPathParams:
    date_yyyymmdd: str = field(default=None, metadata={'path_param': { 'field_name': 'dateYYYYMMDD', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetActiveObjectCountUsingGetRequest:
    path_params: GetActiveObjectCountUsingGetPathParams = field(default=None)
    

@dataclass
class GetActiveObjectCountUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
