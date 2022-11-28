from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1CompaniesRequests:
    company_update_model: Optional[shared.CompanyUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    company_update_model1: Optional[shared.CompanyUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    company_update_model2: Optional[shared.CompanyUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    company_update_model3: Optional[shared.CompanyUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1CompaniesRequest:
    request: Optional[PutSetupV1CompaniesRequests] = field(default=None)
    

@dataclass
class PutSetupV1CompaniesResponse:
    content_type: str = field()
    status_code: int = field()
    company_view_model: Optional[shared.CompanyViewModel] = field(default=None)
    
