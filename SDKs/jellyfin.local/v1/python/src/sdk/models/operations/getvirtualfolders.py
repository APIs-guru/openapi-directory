from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVirtualFoldersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetVirtualFoldersRequest:
    security: GetVirtualFoldersSecurity = field()
    

@dataclass
class GetVirtualFoldersResponse:
    content_type: str = field()
    status_code: int = field()
    virtual_folder_infos: Optional[List[shared.VirtualFolderInfo]] = field(default=None)
    
