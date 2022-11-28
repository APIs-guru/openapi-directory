from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ScannedData:
    r"""GoogleCloudDataplexV1ScannedData
    The data scanned during processing (e.g. in incremental DataScan)
    """
    
    incremental_field: Optional[GoogleCloudDataplexV1ScannedDataIncrementalField] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incrementalField') }})
    
