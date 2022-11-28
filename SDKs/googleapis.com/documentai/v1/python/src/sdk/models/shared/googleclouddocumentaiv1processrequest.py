from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1ProcessRequest:
    r"""GoogleCloudDocumentaiV1ProcessRequest
    Request message for the process document method.
    """
    
    field_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldMask') }})
    inline_document: Optional[GoogleCloudDocumentaiV1Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineDocument') }})
    raw_document: Optional[GoogleCloudDocumentaiV1RawDocument] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawDocument') }})
    skip_human_review: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipHumanReview') }})
    
