from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gcsdestinationconfig


@dataclass_json
@dataclass
class DestinationConfig:
    destination_connection_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationConnectionProfileName' }})
    gcs_destination_config: Optional[gcsdestinationconfig.GcsDestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestinationConfig' }})
    
