from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PreprintProviderLicensesListPathParams:
    preprint_provider_id: str = field(metadata={'path_param': { 'field_name': 'preprint_provider_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintProviderLicensesListRequest:
    path_params: PreprintProviderLicensesListPathParams = field()
    

@dataclass
class PreprintProviderLicensesListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
