from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessagebasiccardbutton
from . import googleclouddialogflowv2intentmessagecolumnproperties
from . import googleclouddialogflowv2intentmessageimage
from . import googleclouddialogflowv2intentmessagetablecardrow


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageTableCard:
    buttons: Optional[List[googleclouddialogflowv2intentmessagebasiccardbutton.GoogleCloudDialogflowV2IntentMessageBasicCardButton]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttons' }})
    column_properties: Optional[List[googleclouddialogflowv2intentmessagecolumnproperties.GoogleCloudDialogflowV2IntentMessageColumnProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnProperties' }})
    image: Optional[googleclouddialogflowv2intentmessageimage.GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    rows: Optional[List[googleclouddialogflowv2intentmessagetablecardrow.GoogleCloudDialogflowV2IntentMessageTableCardRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
