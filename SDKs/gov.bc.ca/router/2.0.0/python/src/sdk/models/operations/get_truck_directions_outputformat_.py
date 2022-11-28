from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetTruckDirectionsOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    KML = "kml"
    HTML = "html"


@dataclass
class GetTruckDirectionsOutputFormatPathParams:
    output_format: GetTruckDirectionsOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class GetTruckDirectionsOutputFormatCriteriaEnum(str, Enum):
    SHORTEST = "shortest"
    FASTEST = "fastest"

class GetTruckDirectionsOutputFormatDistanceUnitEnum(str, Enum):
    KM = "km"
    MI = "mi"


@dataclass
class GetTruckDirectionsOutputFormatQueryParams:
    points: str = field(metadata={'query_param': { 'field_name': 'points', 'style': 'form', 'explode': True }})
    correct_side: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'correctSide', 'style': 'form', 'explode': True }})
    criteria: Optional[GetTruckDirectionsOutputFormatCriteriaEnum] = field(default=None, metadata={'query_param': { 'field_name': 'criteria', 'style': 'form', 'explode': True }})
    departure: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'departure', 'style': 'form', 'explode': True }})
    disable: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disable', 'style': 'form', 'explode': True }})
    distance_unit: Optional[GetTruckDirectionsOutputFormatDistanceUnitEnum] = field(default=None, metadata={'query_param': { 'field_name': 'distanceUnit', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    round_trip: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'roundTrip', 'style': 'form', 'explode': True }})
    route_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'routeDescription', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTruckDirectionsOutputFormatRequest:
    path_params: GetTruckDirectionsOutputFormatPathParams = field()
    query_params: GetTruckDirectionsOutputFormatQueryParams = field()
    

@dataclass
class GetTruckDirectionsOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
