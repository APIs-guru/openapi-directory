from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Observation:
    r"""Observation
    Represents one beacon observed once.
    """
    
    advertised_id: Optional[AdvertisedID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertisedId') }})
    telemetry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetry') }})
    timestamp_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampMs') }})
    
