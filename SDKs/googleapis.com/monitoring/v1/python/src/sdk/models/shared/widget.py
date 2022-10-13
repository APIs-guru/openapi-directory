from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import alertchart
from . import collapsiblegroup
from . import logspanel
from . import scorecard
from . import text
from . import timeseriestable
from . import xychart


@dataclass_json
@dataclass
class Widget:
    alert_chart: Optional[alertchart.AlertChart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertChart' }})
    blank: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blank' }})
    collapsible_group: Optional[collapsiblegroup.CollapsibleGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collapsibleGroup' }})
    logs_panel: Optional[logspanel.LogsPanel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logsPanel' }})
    scorecard: Optional[scorecard.Scorecard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scorecard' }})
    text: Optional[text.Text] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    time_series_table: Optional[timeseriestable.TimeSeriesTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesTable' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    xy_chart: Optional[xychart.XyChart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xyChart' }})
    
