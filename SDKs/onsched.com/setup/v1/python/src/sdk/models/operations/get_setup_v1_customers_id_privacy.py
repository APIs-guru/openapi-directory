from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSetupV1CustomersIDPrivacyPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1CustomersIDPrivacyRequest:
    path_params: GetSetupV1CustomersIDPrivacyPathParams = field(default=None)
    

@dataclass
class GetSetupV1CustomersIDPrivacyResponse:
    content_type: str = field(default=None)
    customer_privacy_view_model: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
