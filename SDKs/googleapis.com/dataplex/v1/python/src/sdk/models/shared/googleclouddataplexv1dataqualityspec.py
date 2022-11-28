from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataQualitySpec:
    r"""GoogleCloudDataplexV1DataQualitySpec
    DataQualityScan related setting.
    """
    
    rules: Optional[List[GoogleCloudDataplexV1DataQualityRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
