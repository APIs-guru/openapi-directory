from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TransferLicensesPathParams:
    licensee_number: str = field(metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class TransferLicensesRequestBody:
    source_licensee_number: str = field(metadata={'form': { 'field_name': 'sourceLicenseeNumber' }})
    

@dataclass
class TransferLicensesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class TransferLicensesRequest:
    path_params: TransferLicensesPathParams = field()
    request: TransferLicensesRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: TransferLicensesSecurity = field()
    

@dataclass
class TransferLicensesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
