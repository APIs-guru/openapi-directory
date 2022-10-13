from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pathreportdimensionvalue
from . import uvarfilter


@dataclass_json
@dataclass
class EventFilter:
    dimension_filter: Optional[pathreportdimensionvalue.PathReportDimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilter' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    uvar_filter: Optional[uvarfilter.UvarFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uvarFilter' }})
    
