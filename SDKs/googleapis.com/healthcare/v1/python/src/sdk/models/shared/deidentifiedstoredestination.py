from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeidentifiedStoreDestination:
    r"""DeidentifiedStoreDestination
    Contains configuration for streaming de-identified FHIR export.
    """
    
    config: Optional[DeidentifyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('store') }})
    
