from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimension
from . import dimension
from . import metric
from . import dimension


@dataclass_json
@dataclass
class PathToConversionReportCompatibleFields:
    conversion_dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionDimensions' }})
    custom_floodlight_variables: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFloodlightVariables' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    per_interaction_dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perInteractionDimensions' }})
    
