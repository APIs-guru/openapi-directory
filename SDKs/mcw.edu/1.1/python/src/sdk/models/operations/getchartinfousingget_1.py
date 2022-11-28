from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetChartInfoUsingGet1PathParams:
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    term_string: str = field(metadata={'path_param': { 'field_name': 'termString', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChartInfoUsingGet1Request:
    path_params: GetChartInfoUsingGet1PathParams = field()
    

@dataclass
class GetChartInfoUsingGet1Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
