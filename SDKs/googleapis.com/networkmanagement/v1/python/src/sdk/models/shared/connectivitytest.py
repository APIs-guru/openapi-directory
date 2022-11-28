from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectivityTest:
    r"""ConnectivityTest
    A Connectivity Test for a network reachability analysis.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination: Optional[Endpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    reachability_details: Optional[ReachabilityDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachabilityDetails') }})
    related_projects: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedProjects') }})
    source: Optional[Endpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class ConnectivityTestInput:
    r"""ConnectivityTestInput
    A Connectivity Test for a network reachability analysis.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination: Optional[Endpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    reachability_details: Optional[ReachabilityDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachabilityDetails') }})
    related_projects: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedProjects') }})
    source: Optional[Endpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
