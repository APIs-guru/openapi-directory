from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostAccountAccessConsentsHeaders:
    sandbox_id: str = field(metadata={'header': { 'field_name': 'sandbox-id', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAccountAccessConsentsRequests:
    ob_read_consent1: Optional[shared.ObReadConsent1] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ob_read_consent2: Optional[shared.ObReadConsent1] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAccountAccessConsentsSecurity:
    client_credentials_token: shared.SchemeClientCredentialsToken = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared.SchemeClientID = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostAccountAccessConsentsRequest:
    headers: PostAccountAccessConsentsHeaders = field()
    security: PostAccountAccessConsentsSecurity = field()
    request: Optional[PostAccountAccessConsentsRequests] = field(default=None)
    

@dataclass
class PostAccountAccessConsentsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_read_consent_response1: Optional[shared.ObReadConsentResponse1] = field(default=None)
    
