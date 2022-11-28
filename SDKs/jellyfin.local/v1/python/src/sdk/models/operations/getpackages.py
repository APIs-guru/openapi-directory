from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPackagesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPackagesRequest:
    security: GetPackagesSecurity = field()
    

@dataclass
class GetPackagesResponse:
    content_type: str = field()
    status_code: int = field()
    package_infos: Optional[List[shared.PackageInfo]] = field(default=None)
    
