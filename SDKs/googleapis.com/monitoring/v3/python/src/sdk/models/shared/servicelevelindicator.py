from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceLevelIndicator:
    r"""ServiceLevelIndicator
    A Service-Level Indicator (SLI) describes the \"performance\" of a service. For some services, the SLI is well-defined. In such cases, the SLI can be described easily by referencing the well-known SLI and providing the needed parameters. Alternatively, a \"custom\" SLI can be defined with a query to the underlying metric store. An SLI is defined to be good_service / total_service over any queried time interval. The value of performance always falls into the range 0 <= performance <= 1. A custom SLI describes how to compute this ratio, whether this is by dividing values from a pair of time series, cutting a Distribution into good and bad counts, or counting time windows in which the service complies with a criterion. For separation of concerns, a single Service-Level Indicator measures performance for only one aspect of service quality, such as fraction of successful queries or fast-enough queries.
    """
    
    basic_sli: Optional[BasicSli] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicSli') }})
    request_based: Optional[RequestBasedSli] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestBased') }})
    windows_based: Optional[WindowsBasedSli] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsBased') }})
    
