from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3version


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListVersionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    versions: Optional[List[googleclouddialogflowcxv3version.GoogleCloudDialogflowCxV3Version]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    
