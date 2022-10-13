from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betadeltaupdatelabelresponseresponse
from . import googleappsdrivelabelsv2betalabel


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse:
    responses: Optional[List[googleappsdrivelabelsv2betadeltaupdatelabelresponseresponse.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    updated_label: Optional[googleappsdrivelabelsv2betalabel.GoogleAppsDriveLabelsV2betaLabel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedLabel' }})
    
