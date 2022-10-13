from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betalabel


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaListLabelsResponse:
    labels: Optional[List[googleappsdrivelabelsv2betalabel.GoogleAppsDriveLabelsV2betaLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
