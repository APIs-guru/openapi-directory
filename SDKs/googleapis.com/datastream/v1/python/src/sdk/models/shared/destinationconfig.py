from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bigquerydestinationconfig
from . import gcsdestinationconfig


@dataclass_json
@dataclass
class DestinationConfig:
    bigquery_destination_config: Optional[bigquerydestinationconfig.BigQueryDestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryDestinationConfig' }})
    destination_connection_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationConnectionProfile' }})
    gcs_destination_config: Optional[gcsdestinationconfig.GcsDestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestinationConfig' }})
    
