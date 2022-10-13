from dataclasses import dataclass, field



@dataclass
class GetStrainTypeDiffUsingGetPathParams:
    date_from_yyyymmdd: str = field(default=None, metadata={'path_param': { 'field_name': 'dateFromYYYYMMDD', 'style': 'simple', 'explode': False }})
    date_to_yyyymmdd: str = field(default=None, metadata={'path_param': { 'field_name': 'dateToYYYYMMDD', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStrainTypeDiffUsingGetRequest:
    path_params: GetStrainTypeDiffUsingGetPathParams = field(default=None)
    

@dataclass
class GetStrainTypeDiffUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
