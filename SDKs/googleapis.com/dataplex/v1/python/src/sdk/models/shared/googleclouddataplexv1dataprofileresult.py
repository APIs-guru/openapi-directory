from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataProfileResult:
    r"""GoogleCloudDataplexV1DataProfileResult
    DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result.
    """
    
    profile: Optional[GoogleCloudDataplexV1DataProfileResultProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    scanned_data: Optional[GoogleCloudDataplexV1ScannedData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scannedData') }})
    
