from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2fieldlistoptions


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldUserOptions:
    list_options: Optional[googleappsdrivelabelsv2fieldlistoptions.GoogleAppsDriveLabelsV2FieldListOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listOptions' }})
    
