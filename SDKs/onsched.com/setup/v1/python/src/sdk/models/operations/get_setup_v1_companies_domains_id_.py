from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CompaniesDomainsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1CompaniesDomainsIDRequest:
    path_params: GetSetupV1CompaniesDomainsIDPathParams = field(default=None)
    

@dataclass
class GetSetupV1CompaniesDomainsIDResponse:
    company_domain_view_model: Optional[shared.CompanyDomainViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
