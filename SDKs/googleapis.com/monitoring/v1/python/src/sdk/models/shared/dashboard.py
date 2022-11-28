from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Dashboard:
    r"""Dashboard
    A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application.
    """
    
    column_layout: Optional[ColumnLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnLayout') }})
    dashboard_filters: Optional[List[DashboardFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardFilters') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    grid_layout: Optional[GridLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gridLayout') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mosaic_layout: Optional[MosaicLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mosaicLayout') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    row_layout: Optional[RowLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowLayout') }})
    
