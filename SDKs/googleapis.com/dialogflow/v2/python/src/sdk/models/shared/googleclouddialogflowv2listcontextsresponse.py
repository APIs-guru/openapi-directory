from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2context


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListContextsResponse:
    contexts: Optional[List[googleclouddialogflowv2context.GoogleCloudDialogflowV2Context]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
