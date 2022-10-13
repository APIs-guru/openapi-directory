from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional

class PostDistanceBetweenPairsOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    HTML = "html"


@dataclass
class PostDistanceBetweenPairsOutputFormatPathParams:
    output_format: PostDistanceBetweenPairsOutputFormatOutputFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    
class PostDistanceBetweenPairsOutputFormatCriteriaEnum(str, Enum):
    SHORTEST = "shortest"
    FASTEST = "fastest"

class PostDistanceBetweenPairsOutputFormatDistanceUnitEnum(str, Enum):
    KM = "km"
    MI = "mi"


@dataclass
class PostDistanceBetweenPairsOutputFormatQueryParams:
    correct_side: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'correctSide', 'style': 'form', 'explode': True }})
    criteria: Optional[PostDistanceBetweenPairsOutputFormatCriteriaEnum] = field(default=None, metadata={'query_param': { 'field_name': 'criteria', 'style': 'form', 'explode': True }})
    departure: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'departure', 'style': 'form', 'explode': True }})
    disable: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disable', 'style': 'form', 'explode': True }})
    distance_unit: Optional[PostDistanceBetweenPairsOutputFormatDistanceUnitEnum] = field(default=None, metadata={'query_param': { 'field_name': 'distanceUnit', 'style': 'form', 'explode': True }})
    from_points: str = field(default=None, metadata={'query_param': { 'field_name': 'fromPoints', 'style': 'form', 'explode': True }})
    max_pairs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxPairs', 'style': 'form', 'explode': True }})
    output_srs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'outputSRS', 'style': 'form', 'explode': True }})
    route_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'routeDescription', 'style': 'form', 'explode': True }})
    to_points: str = field(default=None, metadata={'query_param': { 'field_name': 'toPoints', 'style': 'form', 'explode': True }})
    

@dataclass
class PostDistanceBetweenPairsOutputFormatRequest:
    path_params: PostDistanceBetweenPairsOutputFormatPathParams = field(default=None)
    query_params: PostDistanceBetweenPairsOutputFormatQueryParams = field(default=None)
    

@dataclass
class PostDistanceBetweenPairsOutputFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
