from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Widget:
    r"""Widget
    Widget contains a single dashboard component and configuration of how to present the component in the dashboard.
    """
    
    alert_chart: Optional[AlertChart] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertChart') }})
    blank: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blank') }})
    collapsible_group: Optional[CollapsibleGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collapsibleGroup') }})
    logs_panel: Optional[LogsPanel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsPanel') }})
    scorecard: Optional[Scorecard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scorecard') }})
    text: Optional[Text] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    time_series_table: Optional[TimeSeriesTable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesTable') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    xy_chart: Optional[XyChart] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xyChart') }})
    
