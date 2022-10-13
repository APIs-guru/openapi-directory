from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betafieldlistoptions


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldUserOptions:
    list_options: Optional[googleappsdrivelabelsv2betafieldlistoptions.GoogleAppsDriveLabelsV2betaFieldListOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listOptions' }})
    
