from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessagetablecardcell


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageTableCardRow:
    cells: Optional[List[googleclouddialogflowv2intentmessagetablecardcell.GoogleCloudDialogflowV2IntentMessageTableCardCell]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cells' }})
    divider_after: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dividerAfter' }})
    
