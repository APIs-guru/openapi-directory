from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataQualityResult:
    r"""GoogleCloudDataplexV1DataQualityResult
    The output of a DataQualityScan.
    """
    
    dimensions: Optional[List[GoogleCloudDataplexV1DataQualityDimensionResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    passed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passed') }})
    row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    rules: Optional[List[GoogleCloudDataplexV1DataQualityRuleResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    scanned_data: Optional[GoogleCloudDataplexV1ScannedData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scannedData') }})
    
