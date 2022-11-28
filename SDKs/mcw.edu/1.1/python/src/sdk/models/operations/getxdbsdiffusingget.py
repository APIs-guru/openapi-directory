from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetXdbsDiffUsingGetPathParams:
    date_from_yyyymmdd: str = field(metadata={'path_param': { 'field_name': 'dateFromYYYYMMDD', 'style': 'simple', 'explode': False }})
    date_to_yyyymmdd: str = field(metadata={'path_param': { 'field_name': 'dateToYYYYMMDD', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetXdbsDiffUsingGetRequest:
    path_params: GetXdbsDiffUsingGetPathParams = field()
    

@dataclass
class GetXdbsDiffUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
