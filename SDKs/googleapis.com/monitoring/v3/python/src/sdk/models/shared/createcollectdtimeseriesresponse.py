from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import collectdpayloaderror
from . import createtimeseriessummary


@dataclass_json
@dataclass
class CreateCollectdTimeSeriesResponse:
    payload_errors: Optional[List[collectdpayloaderror.CollectdPayloadError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadErrors' }})
    summary: Optional[createtimeseriessummary.CreateTimeSeriesSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
