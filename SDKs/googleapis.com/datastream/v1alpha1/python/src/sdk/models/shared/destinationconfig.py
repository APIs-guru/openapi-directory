from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DestinationConfig:
    r"""DestinationConfig
    The configuration of the stream destination.
    """
    
    destination_connection_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationConnectionProfileName') }})
    gcs_destination_config: Optional[GcsDestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestinationConfig') }})
    
