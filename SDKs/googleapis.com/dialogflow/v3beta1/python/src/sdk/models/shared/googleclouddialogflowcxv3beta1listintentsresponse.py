from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1intent


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListIntentsResponse:
    intents: Optional[List[googleclouddialogflowcxv3beta1intent.GoogleCloudDialogflowCxV3beta1Intent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intents' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
