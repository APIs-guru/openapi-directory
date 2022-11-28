from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentRevision:
    r"""GoogleCloudDocumentaiV1beta2DocumentRevision
    Contains past or forward revisions of this document.
    """
    
    agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    human_review: Optional[GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanReview') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    parent: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    parent_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentIds') }})
    processor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processor') }})
    
