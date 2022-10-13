from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessageimage
from . import googleclouddialogflowv2beta1intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    footer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footer' }})
    image: Optional[googleclouddialogflowv2beta1intentmessageimage.GoogleCloudDialogflowV2beta1IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    open_uri_action: Optional[googleclouddialogflowv2beta1intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openUriAction' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
