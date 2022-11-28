from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataScanExecutionSpec:
    r"""GoogleCloudDataplexV1DataScanExecutionSpec
    DataScan execution settings.
    """
    
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    trigger: Optional[GoogleCloudDataplexV1Trigger] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    
