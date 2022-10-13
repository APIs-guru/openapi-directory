from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagelistselectitem


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageListSelect:
    items: Optional[List[googleclouddialogflowv2beta1intentmessagelistselectitem.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
