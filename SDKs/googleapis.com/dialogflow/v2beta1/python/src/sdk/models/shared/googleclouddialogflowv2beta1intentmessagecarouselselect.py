from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagecarouselselectitem


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect:
    items: Optional[List[googleclouddialogflowv2beta1intentmessagecarouselselectitem.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
