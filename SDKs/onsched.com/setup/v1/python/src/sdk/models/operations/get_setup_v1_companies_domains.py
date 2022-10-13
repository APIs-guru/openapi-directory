from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSetupV1CompaniesDomainsResponse:
    company_domain_list_view_model: Optional[shared.CompanyDomainListViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
