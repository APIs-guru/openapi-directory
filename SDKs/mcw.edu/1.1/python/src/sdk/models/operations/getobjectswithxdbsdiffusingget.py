from dataclasses import dataclass, field



@dataclass
class GetObjectsWithXdBsDiffUsingGetPathParams:
    date_from_yyyymmdd: str = field(default=None, metadata={'path_param': { 'field_name': 'dateFromYYYYMMDD', 'style': 'simple', 'explode': False }})
    date_to_yyyymmdd: str = field(default=None, metadata={'path_param': { 'field_name': 'dateToYYYYMMDD', 'style': 'simple', 'explode': False }})
    object_key: int = field(default=None, metadata={'path_param': { 'field_name': 'objectKey', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectsWithXdBsDiffUsingGetRequest:
    path_params: GetObjectsWithXdBsDiffUsingGetPathParams = field(default=None)
    

@dataclass
class GetObjectsWithXdBsDiffUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
