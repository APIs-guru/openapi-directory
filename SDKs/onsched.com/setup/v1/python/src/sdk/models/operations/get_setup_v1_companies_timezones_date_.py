from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CompaniesTimezonesDatePathParams:
    date: datetime = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1CompaniesTimezonesDateRequest:
    path_params: GetSetupV1CompaniesTimezonesDatePathParams = field(default=None)
    

@dataclass
class GetSetupV1CompaniesTimezonesDateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    timezone_view_model: Optional[shared.TimezoneViewModel] = field(default=None)
    
