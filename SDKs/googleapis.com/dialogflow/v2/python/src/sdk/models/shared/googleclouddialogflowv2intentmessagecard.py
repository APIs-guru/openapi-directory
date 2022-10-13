from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessagecardbutton


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageCard:
    buttons: Optional[List[googleclouddialogflowv2intentmessagecardbutton.GoogleCloudDialogflowV2IntentMessageCardButton]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttons' }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUri' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
