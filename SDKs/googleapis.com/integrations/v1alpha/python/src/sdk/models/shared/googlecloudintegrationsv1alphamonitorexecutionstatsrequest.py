from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum(str, Enum):
    DATA_FORMAT_UNSPECIFIED = "DATA_FORMAT_UNSPECIFIED"
    TABLE_CONFIG = "TABLE_CONFIG"
    APLOSE_SERIES_LIST_CONFIG = "APLOSE_SERIES_LIST_CONFIG"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequest:
    r"""GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequest
    The request to get data for monarch connector config.
    """
    
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    mash_query: Optional[GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mashQuery') }})
    metric_field_table: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricFieldTable') }})
    output_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputPeriod') }})
    response_template: Optional[GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseTemplate') }})
    
