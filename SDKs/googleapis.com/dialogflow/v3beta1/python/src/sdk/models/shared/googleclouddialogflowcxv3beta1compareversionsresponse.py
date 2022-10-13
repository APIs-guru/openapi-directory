from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1CompareVersionsResponse:
    base_version_content_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseVersionContentJson' }})
    compare_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compareTime' }})
    target_version_content_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetVersionContentJson' }})
    
