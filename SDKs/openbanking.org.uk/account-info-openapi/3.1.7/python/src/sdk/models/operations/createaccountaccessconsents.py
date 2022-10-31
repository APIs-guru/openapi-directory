from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateAccountAccessConsentsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAccountAccessConsentsRequests:
    application_jose_plus_jwe: bytes = field(default=None, metadata={'request': { 'media_type': 'application/jose+jwe' }})
    ob_read_consent1: Optional[shared.ObReadConsent1] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ob_read_consent2: Optional[shared.ObReadConsent1] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAccountAccessConsentsSecurity:
    tppo_auth2_security: shared.SchemeTppoAuth2Security = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateAccountAccessConsentsRequest:
    headers: CreateAccountAccessConsentsHeaders = field(default=None)
    request: CreateAccountAccessConsentsRequests = field(default=None)
    security: CreateAccountAccessConsentsSecurity = field(default=None)
    

@dataclass
class CreateAccountAccessConsentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_read_consent_response1: Optional[shared.ObReadConsentResponse1] = field(default=None)
    status_code: int = field(default=None)
    
