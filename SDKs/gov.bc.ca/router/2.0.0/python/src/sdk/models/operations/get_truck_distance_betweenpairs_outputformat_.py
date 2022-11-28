from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    HTML = "html"


@dataclass
class GetTruckDistanceBetweenPairsOutputFormatPathParams:
    output_format: GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum(str, Enum):
    SHORTEST = "shortest"
    FASTEST = "fastest"

class GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum(str, Enum):
    KM = "km"
    MI = "mi"


@dataclass
class GetTruckDistanceBetweenPairsOutputFormatQueryParams:
    from_points: str = field(metadata={'query_param': { 'field_name': 'fromPoints', 'style': 'form', 'explode': True }})
    to_points: str = field(metadata={'query_param': { 'field_name': 'toPoints', 'style': 'form', 'explode': True }})
    correct_side: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'correctSide', 'style': 'form', 'explode': True }})
    criteria: Optional[GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum] = field(default=None, metadata={'query_param': { 'field_name': 'criteria', 'style': 'form', 'explode': True }})
    departure: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'departure', 'style': 'form', 'explode': True }})
    disable: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disable', 'style': 'form', 'explode': True }})
    distance_unit: Optional[GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum] = field(default=None, metadata={'query_param': { 'field_name': 'distanceUnit', 'style': 'form', 'explode': True }})
    max_pairs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxPairs', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    route_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'routeDescription', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTruckDistanceBetweenPairsOutputFormatRequest:
    path_params: GetTruckDistanceBetweenPairsOutputFormatPathParams = field()
    query_params: GetTruckDistanceBetweenPairsOutputFormatQueryParams = field()
    

@dataclass
class GetTruckDistanceBetweenPairsOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
