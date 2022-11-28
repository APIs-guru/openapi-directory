from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetTruckDistanceOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    KML = "kml"
    HTML = "html"


@dataclass
class GetTruckDistanceOutputFormatPathParams:
    output_format: GetTruckDistanceOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetTruckDistanceOutputFormatCriteriaEnum(str, Enum):
    SHORTEST = "shortest"
    FASTEST = "fastest"

class GetTruckDistanceOutputFormatDistanceUnitEnum(str, Enum):
    KM = "km"
    MI = "mi"


@dataclass
class GetTruckDistanceOutputFormatQueryParams:
    points: str = field(metadata={'query_param': { 'field_name': 'points', 'style': 'form', 'explode': True }})
    correct_side: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'correctSide', 'style': 'form', 'explode': True }})
    criteria: Optional[GetTruckDistanceOutputFormatCriteriaEnum] = field(default=None, metadata={'query_param': { 'field_name': 'criteria', 'style': 'form', 'explode': True }})
    departure: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'departure', 'style': 'form', 'explode': True }})
    disable: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disable', 'style': 'form', 'explode': True }})
    distance_unit: Optional[GetTruckDistanceOutputFormatDistanceUnitEnum] = field(default=None, metadata={'query_param': { 'field_name': 'distanceUnit', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    round_trip: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'roundTrip', 'style': 'form', 'explode': True }})
    route_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'routeDescription', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTruckDistanceOutputFormatRequest:
    path_params: GetTruckDistanceOutputFormatPathParams = field()
    query_params: GetTruckDistanceOutputFormatQueryParams = field()
    

@dataclass
class GetTruckDistanceOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
