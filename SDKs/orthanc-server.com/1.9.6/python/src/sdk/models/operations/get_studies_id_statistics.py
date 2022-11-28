from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStudiesIDStatisticsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDStatisticsRequest:
    path_params: GetStudiesIDStatisticsPathParams = field()
    

@dataclass
class GetStudiesIDStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    get_studies_id_statistics_200_application_json_any: Optional[Any] = field(default=None)
    
