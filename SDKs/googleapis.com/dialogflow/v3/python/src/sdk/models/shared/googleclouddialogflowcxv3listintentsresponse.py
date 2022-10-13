from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3intent


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListIntentsResponse:
    intents: Optional[List[googleclouddialogflowcxv3intent.GoogleCloudDialogflowCxV3Intent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intents' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
