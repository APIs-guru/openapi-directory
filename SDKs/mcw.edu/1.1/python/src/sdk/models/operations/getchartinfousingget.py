from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetChartInfoUsingGetPathParams:
    ref_rgd_id: int = field(metadata={'path_param': { 'field_name': 'refRgdId', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    term_string: str = field(metadata={'path_param': { 'field_name': 'termString', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChartInfoUsingGetRequest:
    path_params: GetChartInfoUsingGetPathParams = field()
    

@dataclass
class GetChartInfoUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
