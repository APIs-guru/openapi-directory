from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betalistlimits


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaUserLimits:
    list_limits: Optional[googleappsdrivelabelsv2betalistlimits.GoogleAppsDriveLabelsV2betaListLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listLimits' }})
    
