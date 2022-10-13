from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metrics
from . import productview
from . import segments


@dataclass_json
@dataclass
class ReportRow:
    metrics: Optional[metrics.Metrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    product_view: Optional[productview.ProductView] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productView' }})
    segments: Optional[segments.Segments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    
