from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import collectdpayload
from . import monitoredresource


@dataclass_json
@dataclass
class CreateCollectdTimeSeriesRequest:
    collectd_payloads: Optional[List[collectdpayload.CollectdPayload]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectdPayloads' }})
    collectd_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectdVersion' }})
    resource: Optional[monitoredresource.MonitoredResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    
