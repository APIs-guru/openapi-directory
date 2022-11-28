from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetApodQueryParams:
    date_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    hd: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hd', 'style': 'form', 'explode': True }})
    

@dataclass
class GetApodSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetApodRequest:
    query_params: GetApodQueryParams = field()
    security: GetApodSecurity = field()
    

@dataclass
class GetApodResponse:
    content_type: str = field()
    status_code: int = field()
    get_apod_200_application_json_anies: Optional[List[Any]] = field(default=None)
    
