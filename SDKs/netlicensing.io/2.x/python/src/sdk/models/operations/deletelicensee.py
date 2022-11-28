from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteLicenseePathParams:
    licensee_number: str = field(metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLicenseeQueryParams:
    force_cascade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'forceCascade', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteLicenseeSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteLicenseeRequest:
    path_params: DeleteLicenseePathParams = field()
    query_params: DeleteLicenseeQueryParams = field()
    security: DeleteLicenseeSecurity = field()
    

@dataclass
class DeleteLicenseeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
