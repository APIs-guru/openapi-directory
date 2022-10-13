from dataclasses import dataclass, field
from typing import Enum,Optional

class GetStatsSeriesPeriodFieldsPeriodEnum(str, Enum):
    DAY = "day"
    MONTH = "month"


@dataclass
class GetStatsSeriesPeriodFieldsPathParams:
    fields: str = field(default=None, metadata={'path_param': { 'field_name': 'fields', 'style': 'simple', 'explode': False }})
    period: GetStatsSeriesPeriodFieldsPeriodEnum = field(default=None, metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStatsSeriesPeriodFieldsQueryParams:
    end: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStatsSeriesPeriodFieldsRequest:
    path_params: GetStatsSeriesPeriodFieldsPathParams = field(default=None)
    query_params: GetStatsSeriesPeriodFieldsQueryParams = field(default=None)
    

@dataclass
class GetStatsSeriesPeriodFieldsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
