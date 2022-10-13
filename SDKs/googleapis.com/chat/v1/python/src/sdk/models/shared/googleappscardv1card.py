from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1cardaction
from . import googleappscardv1cardfixedfooter
from . import googleappscardv1cardheader
from . import googleappscardv1cardheader
from . import googleappscardv1section

class GoogleAppsCardV1CardDisplayStyleEnum(str, Enum):
    DISPLAY_STYLE_UNSPECIFIED = "DISPLAY_STYLE_UNSPECIFIED"
    PEEK = "PEEK"
    REPLACE = "REPLACE"


@dataclass_json
@dataclass
class GoogleAppsCardV1Card:
    card_actions: Optional[List[googleappscardv1cardaction.GoogleAppsCardV1CardAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardActions' }})
    display_style: Optional[GoogleAppsCardV1CardDisplayStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayStyle' }})
    fixed_footer: Optional[googleappscardv1cardfixedfooter.GoogleAppsCardV1CardFixedFooter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedFooter' }})
    header: Optional[googleappscardv1cardheader.GoogleAppsCardV1CardHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    peek_card_header: Optional[googleappscardv1cardheader.GoogleAppsCardV1CardHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peekCardHeader' }})
    sections: Optional[List[googleappscardv1section.GoogleAppsCardV1Section]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sections' }})
    
