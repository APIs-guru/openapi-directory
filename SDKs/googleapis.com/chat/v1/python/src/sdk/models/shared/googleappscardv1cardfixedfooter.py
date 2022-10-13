from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1button
from . import googleappscardv1button


@dataclass_json
@dataclass
class GoogleAppsCardV1CardFixedFooter:
    primary_button: Optional[googleappscardv1button.GoogleAppsCardV1Button] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryButton' }})
    secondary_button: Optional[googleappscardv1button.GoogleAppsCardV1Button] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryButton' }})
    
