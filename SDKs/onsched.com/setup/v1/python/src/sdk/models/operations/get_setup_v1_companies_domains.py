from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CompaniesDomainsResponse:
    content_type: str = field()
    status_code: int = field()
    company_domain_list_view_model: Optional[shared.CompanyDomainListViewModel] = field(default=None)
    
