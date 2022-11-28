from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPackageInfoPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPackageInfoQueryParams:
    assembly_guid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'assemblyGuid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPackageInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPackageInfoRequest:
    path_params: GetPackageInfoPathParams = field()
    query_params: GetPackageInfoQueryParams = field()
    security: GetPackageInfoSecurity = field()
    

@dataclass
class GetPackageInfoResponse:
    content_type: str = field()
    status_code: int = field()
    package_info: Optional[shared.PackageInfo] = field(default=None)
    
