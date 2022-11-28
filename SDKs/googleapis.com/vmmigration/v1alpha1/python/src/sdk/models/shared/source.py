from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceInput:
    r"""SourceInput
    Source message describes a specific vm migration Source resource. It contains the source environment information.
    """
    
    aws: Optional[AwsSourceDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aws') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    vmware: Optional[VmwareSourceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmware') }})
    

@dataclass_json
@dataclass
class Source:
    r"""Source
    Source message describes a specific vm migration Source resource. It contains the source environment information.
    """
    
    aws: Optional[AwsSourceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aws') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    vmware: Optional[VmwareSourceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmware') }})
    
