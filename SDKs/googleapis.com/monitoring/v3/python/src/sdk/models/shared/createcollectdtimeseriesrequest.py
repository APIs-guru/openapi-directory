from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCollectdTimeSeriesRequest:
    r"""CreateCollectdTimeSeriesRequest
    The CreateCollectdTimeSeries request.
    """
    
    collectd_payloads: Optional[List[CollectdPayload]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectdPayloads') }})
    collectd_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectdVersion') }})
    resource: Optional[MonitoredResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
