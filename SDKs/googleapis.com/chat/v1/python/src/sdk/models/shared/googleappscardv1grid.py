from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsCardV1Grid:
    r"""GoogleAppsCardV1Grid
    Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. Currently supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) is coming soon. For example, the following JSON creates a 2 column grid with a single item: ``` \"grid\": { \"title\": \"A fine collection of items\", \"numColumns\": 2, \"borderStyle\": { \"type\": \"STROKE\", \"cornerRadius\": 4.0 }, \"items\": [ \"image\": { \"imageUri\": \"https://www.example.com/image.png\", \"cropStyle\": { \"type\": \"SQUARE\" }, \"borderStyle\": { \"type\": \"STROKE\" } }, \"title\": \"An item\", \"textAlignment\": \"CENTER\" ], \"onClick\": { \"openLink\": { \"url\":\"https://www.example.com\" } } } ```
    """
    
    border_style: Optional[GoogleAppsCardV1BorderStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderStyle') }})
    column_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnCount') }})
    items: Optional[List[GoogleAppsCardV1GridItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    on_click: Optional[GoogleAppsCardV1OnClick] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onClick') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
