from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Target:
    r"""Target
    A specification of a set of documents to listen to.
    """
    
    documents: Optional[DocumentsTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    once: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('once') }})
    query: Optional[QueryTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    resume_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resumeToken') }})
    target_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    
