from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostAccountAccessConsentsHeaders:
    sandbox_id: str = field(default=None, metadata={'header': { 'field_name': 'sandbox-id' }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent' }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date' }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address' }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id' }})
    

@dataclass
class PostAccountAccessConsentsRequests:
    ob_read_consent1: Optional[shared.ObReadConsent1] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ob_read_consent2: Optional[shared.ObReadConsent1] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAccountAccessConsentsSecurity:
    client_credentials_token: shared.SchemeClientCredentialsToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostAccountAccessConsentsRequest:
    headers: PostAccountAccessConsentsHeaders = field(default=None)
    request: Optional[PostAccountAccessConsentsRequests] = field(default=None)
    security: PostAccountAccessConsentsSecurity = field(default=None)
    

@dataclass
class PostAccountAccessConsentsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_read_consent_response1: Optional[shared.ObReadConsentResponse1] = field(default=None)
    status_code: int = field(default=None)
    
