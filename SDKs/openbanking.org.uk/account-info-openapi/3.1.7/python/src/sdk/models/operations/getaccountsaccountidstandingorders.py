from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountIDStandingOrdersPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'AccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDStandingOrdersHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDStandingOrdersSecurity:
    psuo_auth2_security: shared.SchemePsuoAuth2Security = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAccountsAccountIDStandingOrdersRequest:
    headers: GetAccountsAccountIDStandingOrdersHeaders = field()
    path_params: GetAccountsAccountIDStandingOrdersPathParams = field()
    security: GetAccountsAccountIDStandingOrdersSecurity = field()
    

@dataclass
class GetAccountsAccountIDStandingOrdersResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_read_standing_order6: Optional[shared.ObReadStandingOrder6] = field(default=None)
    
