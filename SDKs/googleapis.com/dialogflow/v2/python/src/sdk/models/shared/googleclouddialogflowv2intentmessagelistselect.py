from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessagelistselectitem


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageListSelect:
    items: Optional[List[googleclouddialogflowv2intentmessagelistselectitem.GoogleCloudDialogflowV2IntentMessageListSelectItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
