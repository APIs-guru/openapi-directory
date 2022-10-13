from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1changelog


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListChangelogsResponse:
    changelogs: Optional[List[googleclouddialogflowcxv3beta1changelog.GoogleCloudDialogflowCxV3beta1Changelog]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changelogs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
