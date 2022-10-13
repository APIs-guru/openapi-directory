from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import votecount
from . import organization
from . import link
from . import personvote


@dataclass_json
@dataclass
class VoteEvent:
    counts: List[votecount.VoteCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counts' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    motion_classification: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'motion_classification' }})
    motion_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'motion_text' }})
    organization: organization.Organization = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    result: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    sources: List[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    start_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date' }})
    votes: List[personvote.PersonVote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'votes' }})
    
