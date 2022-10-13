from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betafieldselectionoptionschoice


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest:
    choice: Optional[googleappsdrivelabelsv2betafieldselectionoptionschoice.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'choice' }})
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldId' }})
    
