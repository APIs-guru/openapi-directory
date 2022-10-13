from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betafield


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest:
    field: Optional[googleappsdrivelabelsv2betafield.GoogleAppsDriveLabelsV2betaField] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    
