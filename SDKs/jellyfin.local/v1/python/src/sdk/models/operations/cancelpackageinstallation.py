from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CancelPackageInstallationPathParams:
    package_id: str = field(metadata={'path_param': { 'field_name': 'packageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelPackageInstallationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CancelPackageInstallationRequest:
    path_params: CancelPackageInstallationPathParams = field()
    security: CancelPackageInstallationSecurity = field()
    

@dataclass
class CancelPackageInstallationResponse:
    content_type: str = field()
    status_code: int = field()
    
