from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betafieldproperties


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    properties: Optional[googleappsdrivelabelsv2betafieldproperties.GoogleAppsDriveLabelsV2betaFieldProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
