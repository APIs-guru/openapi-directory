from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2label


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2ListLabelsResponse:
    labels: Optional[List[googleappsdrivelabelsv2label.GoogleAppsDriveLabelsV2Label]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
