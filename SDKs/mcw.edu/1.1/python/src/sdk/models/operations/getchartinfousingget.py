from dataclasses import dataclass, field



@dataclass
class GetChartInfoUsingGetPathParams:
    ref_rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'refRgdId', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    term_string: str = field(default=None, metadata={'path_param': { 'field_name': 'termString', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChartInfoUsingGetRequest:
    path_params: GetChartInfoUsingGetPathParams = field(default=None)
    

@dataclass
class GetChartInfoUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
