from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import membershipfeaturespec
from . import membershipfeaturestate
from . import featureresourcestate
from . import commonfeaturespec
from . import commonfeaturestate


@dataclass_json
@dataclass
class Feature:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTime' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    membership_specs: Optional[dict[str, membershipfeaturespec.MembershipFeatureSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipSpecs' }})
    membership_states: Optional[dict[str, membershipfeaturestate.MembershipFeatureState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipStates' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_state: Optional[featureresourcestate.FeatureResourceState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceState' }})
    spec: Optional[commonfeaturespec.CommonFeatureSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    state: Optional[commonfeaturestate.CommonFeatureState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
