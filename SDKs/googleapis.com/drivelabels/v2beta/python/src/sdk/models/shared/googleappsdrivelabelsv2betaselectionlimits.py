from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betalistlimits


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaSelectionLimits:
    list_limits: Optional[googleappsdrivelabelsv2betalistlimits.GoogleAppsDriveLabelsV2betaListLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listLimits' }})
    max_choices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxChoices' }})
    max_deleted_choices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDeletedChoices' }})
    max_display_name_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDisplayNameLength' }})
    max_id_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxIdLength' }})
    
