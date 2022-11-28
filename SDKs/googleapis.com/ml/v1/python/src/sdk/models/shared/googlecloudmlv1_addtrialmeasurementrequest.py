from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1AddTrialMeasurementRequest:
    r"""GoogleCloudMlV1AddTrialMeasurementRequest
    The request message for the AddTrialMeasurement service method.
    """
    
    measurement: Optional[GoogleCloudMlV1Measurement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurement') }})
    
