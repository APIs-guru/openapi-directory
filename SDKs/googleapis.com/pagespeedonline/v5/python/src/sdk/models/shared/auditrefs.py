from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuditRefs:
    r"""AuditRefs
    A light reference to an audit by id, used to group and weight audits in a given category.
    """
    
    acronym: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acronym') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relevant_audits: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relevantAudits') }})
    weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
