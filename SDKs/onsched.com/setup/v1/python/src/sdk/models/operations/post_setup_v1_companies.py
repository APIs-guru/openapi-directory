from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1CompaniesRequests:
    company_input_model: Optional[shared.CompanyInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    company_input_model1: Optional[shared.CompanyInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    company_input_model2: Optional[shared.CompanyInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    company_input_model3: Optional[shared.CompanyInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1CompaniesRequest:
    request: Optional[PostSetupV1CompaniesRequests] = field(default=None)
    

@dataclass
class PostSetupV1CompaniesResponse:
    content_type: str = field()
    status_code: int = field()
    company_view_model: Optional[shared.CompanyViewModel] = field(default=None)
    
