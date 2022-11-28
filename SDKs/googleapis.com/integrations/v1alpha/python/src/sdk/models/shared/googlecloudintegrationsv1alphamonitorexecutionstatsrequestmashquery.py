from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery:
    r"""GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery
    The MashQuery for searching data, set both queries for Join Operation.
    """
    
    first_query: Optional[GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstQuery') }})
    operation_mode: Optional[GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationMode') }})
    second_query: Optional[GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondQuery') }})
    
