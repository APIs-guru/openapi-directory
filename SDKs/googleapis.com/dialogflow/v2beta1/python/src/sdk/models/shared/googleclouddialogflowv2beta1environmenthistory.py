from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1environmenthistoryentry


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1EnvironmentHistory:
    entries: Optional[List[googleclouddialogflowv2beta1environmenthistoryentry.GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    
