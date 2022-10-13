from dataclasses import dataclass, field



@dataclass
class CancelPackageInstallationPathParams:
    package_id: str = field(default=None, metadata={'path_param': { 'field_name': 'packageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelPackageInstallationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CancelPackageInstallationRequest:
    path_params: CancelPackageInstallationPathParams = field(default=None)
    security: CancelPackageInstallationSecurity = field(default=None)
    

@dataclass
class CancelPackageInstallationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
