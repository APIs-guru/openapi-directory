from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2FormExtractionParams:
    r"""GoogleCloudDocumentaiV1beta2FormExtractionParams
    Parameters to control form extraction behavior.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    key_value_pair_hints: Optional[List[GoogleCloudDocumentaiV1beta2KeyValuePairHint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValuePairHints') }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelVersion') }})
    
