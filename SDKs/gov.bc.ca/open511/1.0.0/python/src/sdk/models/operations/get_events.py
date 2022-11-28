from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetEventsEventTypeEnum(str, Enum):
    CONSTRUCTION = "CONSTRUCTION"
    SPECIAL_EVENT = "SPECIAL_EVENT"
    INCIDENT = "INCIDENT"
    WEATHER_CONDITION = "WEATHER_CONDITION"
    ROAD_CONDITION = "ROAD_CONDITION"

class GetEventsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"

class GetEventsStatusEnum(str, Enum):
    ALL = "ALL"
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"


@dataclass
class GetEventsQueryParams:
    area_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'area_id', 'style': 'form', 'explode': True }})
    bbox: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    created: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created', 'style': 'form', 'explode': True }})
    event_type: Optional[GetEventsEventTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'event_type', 'style': 'form', 'explode': True }})
    format: Optional[GetEventsFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    jurisdiction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'jurisdiction', 'style': 'form', 'explode': True }})
    road_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'road_name', 'style': 'form', 'explode': True }})
    severity: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'severity', 'style': 'form', 'explode': True }})
    status: Optional[GetEventsStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    updated: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updated', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEventsRequest:
    query_params: GetEventsQueryParams = field()
    

@dataclass
class GetEventsResponse:
    content_type: str = field()
    status_code: int = field()
    
