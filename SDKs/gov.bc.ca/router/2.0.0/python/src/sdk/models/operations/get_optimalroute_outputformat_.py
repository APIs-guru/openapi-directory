from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetOptimalRouteOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    KML = "kml"
    HTML = "html"


@dataclass
class GetOptimalRouteOutputFormatPathParams:
    output_format: GetOptimalRouteOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetOptimalRouteOutputFormatCriteriaEnum(str, Enum):
    SHORTEST = "shortest"
    FASTEST = "fastest"

class GetOptimalRouteOutputFormatDistanceUnitEnum(str, Enum):
    KM = "km"
    MI = "mi"


@dataclass
class GetOptimalRouteOutputFormatQueryParams:
    points: str = field(metadata={'query_param': { 'field_name': 'points', 'style': 'form', 'explode': True }})
    correct_side: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'correctSide', 'style': 'form', 'explode': True }})
    criteria: Optional[GetOptimalRouteOutputFormatCriteriaEnum] = field(default=None, metadata={'query_param': { 'field_name': 'criteria', 'style': 'form', 'explode': True }})
    departure: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'departure', 'style': 'form', 'explode': True }})
    disable: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disable', 'style': 'form', 'explode': True }})
    distance_unit: Optional[GetOptimalRouteOutputFormatDistanceUnitEnum] = field(default=None, metadata={'query_param': { 'field_name': 'distanceUnit', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    round_trip: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'roundTrip', 'style': 'form', 'explode': True }})
    route_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'routeDescription', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOptimalRouteOutputFormatRequest:
    path_params: GetOptimalRouteOutputFormatPathParams = field()
    query_params: GetOptimalRouteOutputFormatQueryParams = field()
    

@dataclass
class GetOptimalRouteOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
