from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Feature:
    r"""Feature
    Feature represents the settings and status of any Hub Feature.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    membership_specs: Optional[dict[str, MembershipFeatureSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipSpecs') }})
    membership_states: Optional[dict[str, MembershipFeatureState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipStates') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_state: Optional[FeatureResourceState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceState') }})
    scope_specs: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopeSpecs') }})
    scope_states: Optional[dict[str, ScopeFeatureState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopeStates') }})
    spec: Optional[CommonFeatureSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    state: Optional[CommonFeatureState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class FeatureInput:
    r"""FeatureInput
    Feature represents the settings and status of any Hub Feature.
    """
    
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    membership_specs: Optional[dict[str, MembershipFeatureSpecInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipSpecs') }})
    resource_state: Optional[FeatureResourceState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceState') }})
    scope_specs: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopeSpecs') }})
    spec: Optional[CommonFeatureSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    state: Optional[CommonFeatureState1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
