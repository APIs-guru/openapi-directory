from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columnlayout
from . import dashboardfilter
from . import gridlayout
from . import mosaiclayout
from . import rowlayout


@dataclass_json
@dataclass
class Dashboard:
    column_layout: Optional[columnlayout.ColumnLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnLayout' }})
    dashboard_filters: Optional[List[dashboardfilter.DashboardFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboardFilters' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    grid_layout: Optional[gridlayout.GridLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gridLayout' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    mosaic_layout: Optional[mosaiclayout.MosaicLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mosaicLayout' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    row_layout: Optional[rowlayout.RowLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowLayout' }})
    
