from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDrivesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDrivesRequest:
    security: GetDrivesSecurity = field()
    

@dataclass
class GetDrivesResponse:
    content_type: str = field()
    status_code: int = field()
    file_system_entry_infos: Optional[List[shared.FileSystemEntryInfo]] = field(default=None)
    
