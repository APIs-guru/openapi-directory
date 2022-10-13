from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPackageInfoPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPackageInfoQueryParams:
    assembly_guid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'assemblyGuid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPackageInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPackageInfoRequest:
    path_params: GetPackageInfoPathParams = field(default=None)
    query_params: GetPackageInfoQueryParams = field(default=None)
    security: GetPackageInfoSecurity = field(default=None)
    

@dataclass
class GetPackageInfoResponse:
    content_type: str = field(default=None)
    package_info: Optional[shared.PackageInfo] = field(default=None)
    status_code: int = field(default=None)
    
