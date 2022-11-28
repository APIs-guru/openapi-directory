from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrafficTargetInput:
    r"""TrafficTargetInput
    TrafficTarget holds a single entry of the routing table for a Route.
    """
    
    configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationName') }})
    latest_revision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestRevision') }})
    percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent') }})
    revision_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionName') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclass
class TrafficTarget:
    r"""TrafficTarget
    TrafficTarget holds a single entry of the routing table for a Route.
    """
    
    configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationName') }})
    latest_revision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestRevision') }})
    percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent') }})
    revision_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionName') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
