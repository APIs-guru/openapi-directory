from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentTextAnchor:
    r"""GoogleCloudDocumentaiV1beta2DocumentTextAnchor
    Text reference indexing into the Document.text.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    text_segments: Optional[List[GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSegments') }})
    
