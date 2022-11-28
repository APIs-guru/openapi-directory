from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CompaniesResponse:
    content_type: str = field()
    status_code: int = field()
    company_view_model: Optional[shared.CompanyViewModel] = field(default=None)
    
