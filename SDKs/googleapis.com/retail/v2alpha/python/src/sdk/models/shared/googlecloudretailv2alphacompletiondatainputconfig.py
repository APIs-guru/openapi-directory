from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaCompletionDataInputConfig:
    r"""GoogleCloudRetailV2alphaCompletionDataInputConfig
    The input config source for completion data.
    """
    
    big_query_source: Optional[GoogleCloudRetailV2alphaBigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQuerySource') }})
    
