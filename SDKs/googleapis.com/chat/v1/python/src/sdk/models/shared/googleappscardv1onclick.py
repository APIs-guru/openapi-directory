from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1action
from . import googleappscardv1card
from . import googleappscardv1action
from . import googleappscardv1openlink


@dataclass_json
@dataclass
class GoogleAppsCardV1OnClick:
    action: Optional[googleappscardv1action.GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    card: Optional[googleappscardv1card.GoogleAppsCardV1Card] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card' }})
    open_dynamic_link_action: Optional[googleappscardv1action.GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openDynamicLinkAction' }})
    open_link: Optional[googleappscardv1openlink.GoogleAppsCardV1OpenLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openLink' }})
    
