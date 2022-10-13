from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessageimage
from . import googleclouddialogflowv2intentmessageimage


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject:
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentUrl' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    icon: Optional[googleclouddialogflowv2intentmessageimage.GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    large_image: Optional[googleclouddialogflowv2intentmessageimage.GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'largeImage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
