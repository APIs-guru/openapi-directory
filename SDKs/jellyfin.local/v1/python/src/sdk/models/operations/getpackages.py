from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPackagesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPackagesRequest:
    security: GetPackagesSecurity = field(default=None)
    

@dataclass
class GetPackagesResponse:
    content_type: str = field(default=None)
    package_infos: Optional[List[shared.PackageInfo]] = field(default=None)
    status_code: int = field(default=None)
    
