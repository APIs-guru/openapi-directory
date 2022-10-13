from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2fieldselectionoptionschoice
from . import googleappsdrivelabelsv2fieldlistoptions


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldSelectionOptions:
    choices: Optional[List[googleappsdrivelabelsv2fieldselectionoptionschoice.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'choices' }})
    list_options: Optional[googleappsdrivelabelsv2fieldlistoptions.GoogleAppsDriveLabelsV2FieldListOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listOptions' }})
    
