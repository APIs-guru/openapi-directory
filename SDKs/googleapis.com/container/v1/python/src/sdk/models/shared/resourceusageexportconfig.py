from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceUsageExportConfig:
    r"""ResourceUsageExportConfig
    Configuration for exporting cluster resource usages.
    """
    
    bigquery_destination: Optional[BigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDestination') }})
    consumption_metering_config: Optional[ConsumptionMeteringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumptionMeteringConfig') }})
    enable_network_egress_metering: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableNetworkEgressMetering') }})
    
