from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimension
from . import dimension
from . import metric
from . import dimension


@dataclass_json
@dataclass
class PathReportCompatibleFields:
    channel_groupings: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelGroupings' }})
    dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    path_filters: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathFilters' }})
    
