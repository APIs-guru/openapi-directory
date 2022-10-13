from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessagecarouselselectitem


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageCarouselSelect:
    items: Optional[List[googleclouddialogflowv2intentmessagecarouselselectitem.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
