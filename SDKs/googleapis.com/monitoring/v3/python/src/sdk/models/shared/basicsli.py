from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BasicSli:
    r"""BasicSli
    An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service.
    """
    
    availability: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    latency: Optional[LatencyCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    location: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    method: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    version: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
