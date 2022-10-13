from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimension
from . import dimension
from . import metric


@dataclass_json
@dataclass
class FloodlightReportCompatibleFields:
    dimension_filters: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilters' }})
    dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    
