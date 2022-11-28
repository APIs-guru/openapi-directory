from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetXdbsCountUsingGetPathParams:
    date_yyyymmdd: str = field(metadata={'path_param': { 'field_name': 'dateYYYYMMDD', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetXdbsCountUsingGetRequest:
    path_params: GetXdbsCountUsingGetPathParams = field()
    

@dataclass
class GetXdbsCountUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
