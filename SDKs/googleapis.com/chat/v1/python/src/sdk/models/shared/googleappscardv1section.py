from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1widget


@dataclass_json
@dataclass
class GoogleAppsCardV1Section:
    collapsible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collapsible' }})
    header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    uncollapsible_widgets_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uncollapsibleWidgetsCount' }})
    widgets: Optional[List[googleappscardv1widget.GoogleAppsCardV1Widget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widgets' }})
    
