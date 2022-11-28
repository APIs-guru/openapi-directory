from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentTextChange:
    r"""GoogleCloudDocumentaiV1beta2DocumentTextChange
    This message is used for text changes aka. OCR corrections.
    """
    
    changed_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changedText') }})
    provenance: Optional[List[GoogleCloudDocumentaiV1beta2DocumentProvenance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    text_anchor: Optional[GoogleCloudDocumentaiV1beta2DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textAnchor') }})
    
