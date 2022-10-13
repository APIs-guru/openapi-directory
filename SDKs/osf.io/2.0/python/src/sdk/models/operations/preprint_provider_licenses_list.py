from dataclasses import dataclass, field
from typing import List


@dataclass
class PreprintProviderLicensesListPathParams:
    preprint_provider_id: str = field(default=None, metadata={'path_param': { 'field_name': 'preprint_provider_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintProviderLicensesListRequest:
    path_params: PreprintProviderLicensesListPathParams = field(default=None)
    

@dataclass
class PreprintProviderLicensesListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
