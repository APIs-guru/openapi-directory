from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import widgetmarkup


@dataclass_json
@dataclass
class Section:
    header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    widgets: Optional[List[widgetmarkup.WidgetMarkup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widgets' }})
    
