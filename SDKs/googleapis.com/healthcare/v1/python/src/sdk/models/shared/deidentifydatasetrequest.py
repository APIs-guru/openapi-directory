from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeidentifyDatasetRequest:
    r"""DeidentifyDatasetRequest
    Redacts identifying information from the specified dataset.
    """
    
    config: Optional[DeidentifyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    destination_dataset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDataset') }})
    gcs_config_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsConfigUri') }})
    
