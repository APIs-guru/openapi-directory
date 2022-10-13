from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateFundsConfirmationsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent' }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date' }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address' }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id' }})
    

@dataclass
class CreateFundsConfirmationsSecurity:
    psuo_auth2_security: shared.SchemePsuoAuth2Security = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFundsConfirmationsRequest:
    headers: CreateFundsConfirmationsHeaders = field(default=None)
    request: shared.ObFundsConfirmation1 = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFundsConfirmationsSecurity = field(default=None)
    

@dataclass
class CreateFundsConfirmationsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_funds_confirmation_response1: Optional[shared.ObFundsConfirmationResponse1] = field(default=None)
    status_code: int = field(default=None)
    
