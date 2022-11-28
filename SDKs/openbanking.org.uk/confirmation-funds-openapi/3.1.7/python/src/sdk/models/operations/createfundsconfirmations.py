from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateFundsConfirmationsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFundsConfirmationsSecurity:
    psuo_auth2_security: shared.SchemePsuoAuth2Security = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFundsConfirmationsRequest:
    headers: CreateFundsConfirmationsHeaders = field()
    request: shared.ObFundsConfirmation1 = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFundsConfirmationsSecurity = field()
    

@dataclass
class CreateFundsConfirmationsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_funds_confirmation_response1: Optional[shared.ObFundsConfirmationResponse1] = field(default=None)
    
