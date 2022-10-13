from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDrivesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDrivesRequest:
    security: GetDrivesSecurity = field(default=None)
    

@dataclass
class GetDrivesResponse:
    content_type: str = field(default=None)
    file_system_entry_infos: Optional[List[shared.FileSystemEntryInfo]] = field(default=None)
    status_code: int = field(default=None)
    
