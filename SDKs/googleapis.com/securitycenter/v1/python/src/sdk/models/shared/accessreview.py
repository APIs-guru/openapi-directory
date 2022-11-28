from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccessReview:
    r"""AccessReview
    Conveys information about a Kubernetes access review (e.g. kubectl auth can-i ...) that was involved in a finding.
    """
    
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ns') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    subresource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subresource') }})
    verb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verb') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
