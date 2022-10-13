from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import committeeclassification_enum
from . import link
from . import committeemembership
from . import altname
from . import link


@dataclass_json
@dataclass
class Committee:
    classification: committeeclassification_enum.CommitteeClassificationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    extras: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extras' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    memberships: Optional[List[committeemembership.CommitteeMembership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberships' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    other_names: Optional[List[altname.AltName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'other_names' }})
    parent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_id' }})
    sources: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
