from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsCardV1Widget:
    r"""GoogleAppsCardV1Widget
    Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types.
    """
    
    button_list: Optional[GoogleAppsCardV1ButtonList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttonList') }})
    date_time_picker: Optional[GoogleAppsCardV1DateTimePicker] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTimePicker') }})
    decorated_text: Optional[GoogleAppsCardV1DecoratedText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decoratedText') }})
    divider: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('divider') }})
    grid: Optional[GoogleAppsCardV1Grid] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grid') }})
    image: Optional[GoogleAppsCardV1Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    selection_input: Optional[GoogleAppsCardV1SelectionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionInput') }})
    text_input: Optional[GoogleAppsCardV1TextInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textInput') }})
    text_paragraph: Optional[GoogleAppsCardV1TextParagraph] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textParagraph') }})
    
