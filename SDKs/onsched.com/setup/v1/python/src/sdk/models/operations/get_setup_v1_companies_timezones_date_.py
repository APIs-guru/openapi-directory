from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CompaniesTimezonesDatePathParams:
    date_: datetime = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1CompaniesTimezonesDateRequest:
    path_params: GetSetupV1CompaniesTimezonesDatePathParams = field()
    

@dataclass
class GetSetupV1CompaniesTimezonesDateResponse:
    content_type: str = field()
    status_code: int = field()
    timezone_view_model: Optional[shared.TimezoneViewModel] = field(default=None)
    
