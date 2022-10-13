from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1buttonlist
from . import googleappscardv1datetimepicker
from . import googleappscardv1decoratedtext
from . import googleappscardv1grid
from . import googleappscardv1image
from . import googleappscardv1selectioninput
from . import googleappscardv1textinput
from . import googleappscardv1textparagraph

class GoogleAppsCardV1WidgetHorizontalAlignmentEnum(str, Enum):
    HORIZONTAL_ALIGNMENT_UNSPECIFIED = "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    START = "START"
    CENTER = "CENTER"
    END = "END"


@dataclass_json
@dataclass
class GoogleAppsCardV1Widget:
    button_list: Optional[googleappscardv1buttonlist.GoogleAppsCardV1ButtonList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttonList' }})
    date_time_picker: Optional[googleappscardv1datetimepicker.GoogleAppsCardV1DateTimePicker] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTimePicker' }})
    decorated_text: Optional[googleappscardv1decoratedtext.GoogleAppsCardV1DecoratedText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decoratedText' }})
    divider: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'divider' }})
    grid: Optional[googleappscardv1grid.GoogleAppsCardV1Grid] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grid' }})
    horizontal_alignment: Optional[GoogleAppsCardV1WidgetHorizontalAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horizontalAlignment' }})
    image: Optional[googleappscardv1image.GoogleAppsCardV1Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    selection_input: Optional[googleappscardv1selectioninput.GoogleAppsCardV1SelectionInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionInput' }})
    text_input: Optional[googleappscardv1textinput.GoogleAppsCardV1TextInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textInput' }})
    text_paragraph: Optional[googleappscardv1textparagraph.GoogleAppsCardV1TextParagraph] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textParagraph' }})
    
