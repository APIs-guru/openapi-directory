from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class InstallPackagePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class InstallPackageQueryParams:
    assembly_guid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'assemblyGuid', 'style': 'form', 'explode': True }})
    repository_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'repositoryUrl', 'style': 'form', 'explode': True }})
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class InstallPackageSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class InstallPackageRequest:
    path_params: InstallPackagePathParams = field()
    query_params: InstallPackageQueryParams = field()
    security: InstallPackageSecurity = field()
    

@dataclass
class InstallPackageResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
