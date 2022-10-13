from dataclasses import dataclass, field



@dataclass
class GetStrainTypeCountUsingGetPathParams:
    date_yyyymmdd: str = field(default=None, metadata={'path_param': { 'field_name': 'dateYYYYMMDD', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStrainTypeCountUsingGetRequest:
    path_params: GetStrainTypeCountUsingGetPathParams = field(default=None)
    

@dataclass
class GetStrainTypeCountUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
