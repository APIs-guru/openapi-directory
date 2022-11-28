from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetFilePaymentsFilePaymentIDReportFilePathParams:
    file_payment_id: str = field(metadata={'path_param': { 'field_name': 'FilePaymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilePaymentsFilePaymentIDReportFileHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilePaymentsFilePaymentIDReportFileSecurity:
    tppo_auth2_security: shared.SchemeTppoAuth2Security = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilePaymentsFilePaymentIDReportFileRequest:
    headers: GetFilePaymentsFilePaymentIDReportFileHeaders = field()
    path_params: GetFilePaymentsFilePaymentIDReportFilePathParams = field()
    security: GetFilePaymentsFilePaymentIDReportFileSecurity = field()
    

@dataclass
class GetFilePaymentsFilePaymentIDReportFileResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    file: Optional[dict[str, Any]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    
