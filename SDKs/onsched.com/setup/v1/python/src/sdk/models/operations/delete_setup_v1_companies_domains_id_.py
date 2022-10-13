from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1CompaniesDomainsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1CompaniesDomainsIDRequest:
    path_params: DeleteSetupV1CompaniesDomainsIDPathParams = field(default=None)
    

@dataclass
class DeleteSetupV1CompaniesDomainsIDResponse:
    company_domain_view_model: Optional[shared.CompanyDomainViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
