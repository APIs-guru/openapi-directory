from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDistanceBetweenPairsOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    HTML = "html"


@dataclass
class GetDistanceBetweenPairsOutputFormatPathParams:
    output_format: GetDistanceBetweenPairsOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetDistanceBetweenPairsOutputFormatCriteriaEnum(str, Enum):
    SHORTEST = "shortest"
    FASTEST = "fastest"

class GetDistanceBetweenPairsOutputFormatDistanceUnitEnum(str, Enum):
    KM = "km"
    MI = "mi"


@dataclass
class GetDistanceBetweenPairsOutputFormatQueryParams:
    from_points: str = field(metadata={'query_param': { 'field_name': 'fromPoints', 'style': 'form', 'explode': True }})
    to_points: str = field(metadata={'query_param': { 'field_name': 'toPoints', 'style': 'form', 'explode': True }})
    correct_side: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'correctSide', 'style': 'form', 'explode': True }})
    criteria: Optional[GetDistanceBetweenPairsOutputFormatCriteriaEnum] = field(default=None, metadata={'query_param': { 'field_name': 'criteria', 'style': 'form', 'explode': True }})
    departure: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'departure', 'style': 'form', 'explode': True }})
    disable: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disable', 'style': 'form', 'explode': True }})
    distance_unit: Optional[GetDistanceBetweenPairsOutputFormatDistanceUnitEnum] = field(default=None, metadata={'query_param': { 'field_name': 'distanceUnit', 'style': 'form', 'explode': True }})
    max_pairs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxPairs', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    route_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'routeDescription', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDistanceBetweenPairsOutputFormatRequest:
    path_params: GetDistanceBetweenPairsOutputFormatPathParams = field()
    query_params: GetDistanceBetweenPairsOutputFormatQueryParams = field()
    

@dataclass
class GetDistanceBetweenPairsOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
