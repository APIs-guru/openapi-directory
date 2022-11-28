from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LighthouseCategoryV5:
    r"""LighthouseCategoryV5
    A Lighthouse category.
    """
    
    audit_refs: Optional[List[AuditRefs]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditRefs') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    manual_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualDescription') }})
    score: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
