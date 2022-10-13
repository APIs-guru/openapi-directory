from dataclasses import dataclass, field



@dataclass
class GetChartInfoUsingGet1PathParams:
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    term_string: str = field(default=None, metadata={'path_param': { 'field_name': 'termString', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChartInfoUsingGet1Request:
    path_params: GetChartInfoUsingGet1PathParams = field(default=None)
    

@dataclass
class GetChartInfoUsingGet1Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
