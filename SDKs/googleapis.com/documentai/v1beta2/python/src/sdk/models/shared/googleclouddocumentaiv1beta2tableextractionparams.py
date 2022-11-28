from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2TableExtractionParams:
    r"""GoogleCloudDocumentaiV1beta2TableExtractionParams
    Parameters to control table extraction behavior.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    header_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerHints') }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelVersion') }})
    table_bound_hints: Optional[List[GoogleCloudDocumentaiV1beta2TableBoundHint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableBoundHints') }})
    
