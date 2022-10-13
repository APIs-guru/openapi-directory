from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3changelog


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListChangelogsResponse:
    changelogs: Optional[List[googleclouddialogflowcxv3changelog.GoogleCloudDialogflowCxV3Changelog]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changelogs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
