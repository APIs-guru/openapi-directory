from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CompaniesResponse:
    company_view_model: Optional[shared.CompanyViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
