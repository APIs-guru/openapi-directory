from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCollectdTimeSeriesResponse:
    r"""CreateCollectdTimeSeriesResponse
    The CreateCollectdTimeSeries response.
    """
    
    payload_errors: Optional[List[CollectdPayloadError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadErrors') }})
    summary: Optional[CreateTimeSeriesSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
