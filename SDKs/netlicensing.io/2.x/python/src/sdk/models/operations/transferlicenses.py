from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class TransferLicensesPathParams:
    licensee_number: str = field(default=None, metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class TransferLicensesRequestBody:
    source_licensee_number: str = field(default=None, metadata={'form': { 'field_name': 'sourceLicenseeNumber' }})
    

@dataclass
class TransferLicensesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class TransferLicensesRequest:
    path_params: TransferLicensesPathParams = field(default=None)
    request: TransferLicensesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: TransferLicensesSecurity = field(default=None)
    

@dataclass
class TransferLicensesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
