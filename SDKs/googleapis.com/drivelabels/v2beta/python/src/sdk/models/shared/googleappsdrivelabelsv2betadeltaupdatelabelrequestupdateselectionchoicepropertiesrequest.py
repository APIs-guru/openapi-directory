from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest:
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    properties: Optional[googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
