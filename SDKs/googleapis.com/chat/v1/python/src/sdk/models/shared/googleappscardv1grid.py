from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1borderstyle
from . import googleappscardv1griditem
from . import googleappscardv1onclick


@dataclass_json
@dataclass
class GoogleAppsCardV1Grid:
    border_style: Optional[googleappscardv1borderstyle.GoogleAppsCardV1BorderStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderStyle' }})
    column_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnCount' }})
    items: Optional[List[googleappscardv1griditem.GoogleAppsCardV1GridItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    on_click: Optional[googleappscardv1onclick.GoogleAppsCardV1OnClick] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onClick' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
