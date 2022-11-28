from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateFilePaymentConsentsConsentIDFilePathParams:
    consent_id: str = field(metadata={'path_param': { 'field_name': 'ConsentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFilePaymentConsentsConsentIDFileHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_idempotency_key: str = field(metadata={'header': { 'field_name': 'x-idempotency-key', 'style': 'simple', 'explode': False }})
    x_jws_signature: str = field(metadata={'header': { 'field_name': 'x-jws-signature', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFilePaymentConsentsConsentIDFileRequests:
    application_jose_plus_jwe: bytes = field(metadata={'request': { 'media_type': 'application/jose+jwe' }})
    file: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    file1: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFilePaymentConsentsConsentIDFileSecurity:
    tppo_auth2_security: shared.SchemeTppoAuth2Security = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFilePaymentConsentsConsentIDFileRequest:
    headers: CreateFilePaymentConsentsConsentIDFileHeaders = field()
    path_params: CreateFilePaymentConsentsConsentIDFilePathParams = field()
    request: CreateFilePaymentConsentsConsentIDFileRequests = field()
    security: CreateFilePaymentConsentsConsentIDFileSecurity = field()
    

@dataclass
class CreateFilePaymentConsentsConsentIDFileResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    
