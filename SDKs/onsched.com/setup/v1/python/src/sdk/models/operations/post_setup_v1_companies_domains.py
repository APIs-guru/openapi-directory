from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1CompaniesDomainsRequests:
    company_domain_input_model: Optional[shared.CompanyDomainInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    company_domain_input_model1: Optional[shared.CompanyDomainInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    company_domain_input_model2: Optional[shared.CompanyDomainInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    company_domain_input_model3: Optional[shared.CompanyDomainInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1CompaniesDomainsRequest:
    request: Optional[PostSetupV1CompaniesDomainsRequests] = field(default=None)
    

@dataclass
class PostSetupV1CompaniesDomainsResponse:
    content_type: str = field()
    status_code: int = field()
    company_domain_view_model: Optional[shared.CompanyDomainViewModel] = field(default=None)
    
