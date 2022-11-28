from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAppsCardV1CardDisplayStyleEnum(str, Enum):
    DISPLAY_STYLE_UNSPECIFIED = "DISPLAY_STYLE_UNSPECIFIED"
    PEEK = "PEEK"
    REPLACE = "REPLACE"


@dataclass_json
@dataclass
class GoogleAppsCardV1Card:
    r"""GoogleAppsCardV1Card
    Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. In Google Chat, cards appear in several places: - As stand-alone messages. - Accompanying a text message, just beneath the text message. - As a [dialog](https://developers.google.com/chat/how-tos/dialogs). The following example JSON creates a \"contact card\" that features: - A header with the contact's name, job title, avatar picture. - A section with the contact information, including formatted text. - Buttons that users can click to share the contact or see more or less info. ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) ``` { \"cardsV2\": [ { \"cardId\": \"unique-card-id\", \"card\": { \"header\": { \"title\": \"Sasha\", \"subtitle\": \"Software Engineer\", \"imageUrl\": \"https://developers.google.com/chat/images/quickstart-app-avatar.png\", \"imageType\": \"CIRCLE\", \"imageAltText\": \"Avatar for Sasha\", }, \"sections\": [ { \"header\": \"Contact Info\", \"collapsible\": true, \"uncollapsibleWidgetsCount\": 1, \"widgets\": [ { \"decoratedText\": { \"startIcon\": { \"knownIcon\": \"EMAIL\", }, \"text\": \"sasha@example.com\", } }, { \"decoratedText\": { \"startIcon\": { \"knownIcon\": \"PERSON\", }, \"text\": \"Online\", }, }, { \"decoratedText\": { \"startIcon\": { \"knownIcon\": \"PHONE\", }, \"text\": \"+1 (555) 555-1234\", } }, { \"buttonList\": { \"buttons\": [ { \"text\": \"Share\", \"onClick\": { \"openLink\": { \"url\": \"https://example.com/share\", } } }, { \"text\": \"Edit\", \"onClick\": { \"action\": { \"function\": \"goToView\", \"parameters\": [ { \"key\": \"viewType\", \"value\": \"EDIT\", } ], } } }, ], } }, ], }, ], }, } ], } ```
    """
    
    card_actions: Optional[List[GoogleAppsCardV1CardAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardActions') }})
    display_style: Optional[GoogleAppsCardV1CardDisplayStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayStyle') }})
    fixed_footer: Optional[GoogleAppsCardV1CardFixedFooter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedFooter') }})
    header: Optional[GoogleAppsCardV1CardHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    peek_card_header: Optional[GoogleAppsCardV1CardHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peekCardHeader') }})
    sections: Optional[List[GoogleAppsCardV1Section]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    
