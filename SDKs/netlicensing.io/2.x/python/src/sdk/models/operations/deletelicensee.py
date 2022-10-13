from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteLicenseePathParams:
    licensee_number: str = field(default=None, metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLicenseeQueryParams:
    force_cascade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'forceCascade', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteLicenseeSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteLicenseeRequest:
    path_params: DeleteLicenseePathParams = field(default=None)
    query_params: DeleteLicenseeQueryParams = field(default=None)
    security: DeleteLicenseeSecurity = field(default=None)
    

@dataclass
class DeleteLicenseeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
