from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bigquerydestination
from . import consumptionmeteringconfig


@dataclass_json
@dataclass
class ResourceUsageExportConfig:
    bigquery_destination: Optional[bigquerydestination.BigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryDestination' }})
    consumption_metering_config: Optional[consumptionmeteringconfig.ConsumptionMeteringConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumptionMeteringConfig' }})
    enable_network_egress_metering: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableNetworkEgressMetering' }})
    
