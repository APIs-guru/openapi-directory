from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagebasiccardbutton
from . import googleclouddialogflowv2beta1intentmessagecolumnproperties
from . import googleclouddialogflowv2beta1intentmessageimage
from . import googleclouddialogflowv2beta1intentmessagetablecardrow


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageTableCard:
    buttons: Optional[List[googleclouddialogflowv2beta1intentmessagebasiccardbutton.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttons' }})
    column_properties: Optional[List[googleclouddialogflowv2beta1intentmessagecolumnproperties.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnProperties' }})
    image: Optional[googleclouddialogflowv2beta1intentmessageimage.GoogleCloudDialogflowV2beta1IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    rows: Optional[List[googleclouddialogflowv2beta1intentmessagetablecardrow.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
