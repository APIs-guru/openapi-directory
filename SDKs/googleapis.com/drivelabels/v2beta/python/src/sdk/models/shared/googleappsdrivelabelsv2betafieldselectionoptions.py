from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betafieldselectionoptionschoice
from . import googleappsdrivelabelsv2betafieldlistoptions


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldSelectionOptions:
    choices: Optional[List[googleappsdrivelabelsv2betafieldselectionoptionschoice.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'choices' }})
    list_options: Optional[googleappsdrivelabelsv2betafieldlistoptions.GoogleAppsDriveLabelsV2betaFieldListOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listOptions' }})
    
