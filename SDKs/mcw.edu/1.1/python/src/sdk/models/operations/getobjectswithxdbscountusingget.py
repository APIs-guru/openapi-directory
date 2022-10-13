from dataclasses import dataclass, field



@dataclass
class GetObjectsWithXdBsCountUsingGetPathParams:
    date_yyyymmdd: str = field(default=None, metadata={'path_param': { 'field_name': 'dateYYYYMMDD', 'style': 'simple', 'explode': False }})
    object_key: int = field(default=None, metadata={'path_param': { 'field_name': 'objectKey', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectsWithXdBsCountUsingGetRequest:
    path_params: GetObjectsWithXdBsCountUsingGetPathParams = field(default=None)
    

@dataclass
class GetObjectsWithXdBsCountUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
