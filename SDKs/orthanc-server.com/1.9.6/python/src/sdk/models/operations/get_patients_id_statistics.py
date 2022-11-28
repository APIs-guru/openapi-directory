from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPatientsIDStatisticsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDStatisticsRequest:
    path_params: GetPatientsIDStatisticsPathParams = field()
    

@dataclass
class GetPatientsIDStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    get_patients_id_statistics_200_application_json_any: Optional[Any] = field(default=None)
    
