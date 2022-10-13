from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessageimage
from . import googleclouddialogflowv2intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    footer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footer' }})
    image: Optional[googleclouddialogflowv2intentmessageimage.GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    open_uri_action: Optional[googleclouddialogflowv2intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openUriAction' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
