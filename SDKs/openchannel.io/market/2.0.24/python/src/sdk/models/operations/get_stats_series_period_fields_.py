from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetStatsSeriesPeriodFieldsPeriodEnum(str, Enum):
    DAY = "day"
    MONTH = "month"


@dataclass
class GetStatsSeriesPeriodFieldsPathParams:
    fields: str = field(metadata={'path_param': { 'field_name': 'fields', 'style': 'simple', 'explode': False }})
    period: GetStatsSeriesPeriodFieldsPeriodEnum = field(metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStatsSeriesPeriodFieldsQueryParams:
    end: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStatsSeriesPeriodFieldsRequest:
    path_params: GetStatsSeriesPeriodFieldsPathParams = field()
    query_params: GetStatsSeriesPeriodFieldsQueryParams = field()
    

@dataclass
class GetStatsSeriesPeriodFieldsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
