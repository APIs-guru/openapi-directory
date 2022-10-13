from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betalifecycledisabledpolicy


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest:
    disabled_policy: Optional[googleappsdrivelabelsv2betalifecycledisabledpolicy.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledPolicy' }})
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
