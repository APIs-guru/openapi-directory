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
class Deployment:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTime') }})
    labels: Optional[List[DeploymentLabelEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation: Optional[Operation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    target: Optional[TargetConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    update: Optional[DeploymentUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
