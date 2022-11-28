from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1CompaniesRegionsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1CompaniesRegionsIDRequests:
    region_update_model: Optional[shared.RegionUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    region_update_model1: Optional[shared.RegionUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    region_update_model2: Optional[shared.RegionUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    region_update_model3: Optional[shared.RegionUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1CompaniesRegionsIDRequest:
    path_params: PutSetupV1CompaniesRegionsIDPathParams = field()
    request: Optional[PutSetupV1CompaniesRegionsIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1CompaniesRegionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    region_view_model: Optional[shared.RegionViewModel] = field(default=None)
    
