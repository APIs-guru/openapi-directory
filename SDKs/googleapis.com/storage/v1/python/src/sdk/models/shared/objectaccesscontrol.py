from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectAccessControlProjectTeam:
    r"""ObjectAccessControlProjectTeam
    The project team associated with the entity, if any.
    """
    
    project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectNumber') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    

@dataclass_json
@dataclass
class ObjectAccessControl:
    r"""ObjectAccessControl
    An access-control entry.
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityId') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generation') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    project_team: Optional[ObjectAccessControlProjectTeam] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectTeam') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    
