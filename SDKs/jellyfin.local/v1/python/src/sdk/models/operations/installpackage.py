from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class InstallPackagePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class InstallPackageQueryParams:
    assembly_guid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'assemblyGuid', 'style': 'form', 'explode': True }})
    repository_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'repositoryUrl', 'style': 'form', 'explode': True }})
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class InstallPackageSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class InstallPackageRequest:
    path_params: InstallPackagePathParams = field(default=None)
    query_params: InstallPackageQueryParams = field(default=None)
    security: InstallPackageSecurity = field(default=None)
    

@dataclass
class InstallPackageResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
