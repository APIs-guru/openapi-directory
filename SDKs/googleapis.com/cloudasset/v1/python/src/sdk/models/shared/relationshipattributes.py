from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RelationshipAttributes:
    r"""RelationshipAttributes
    DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`.
    """
    
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    source_resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceResourceType') }})
    target_resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetResourceType') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
