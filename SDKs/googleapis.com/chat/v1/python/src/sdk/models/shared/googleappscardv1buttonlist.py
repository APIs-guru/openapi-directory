from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1button


@dataclass_json
@dataclass
class GoogleAppsCardV1ButtonList:
    buttons: Optional[List[googleappscardv1button.GoogleAppsCardV1Button]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttons' }})
    
