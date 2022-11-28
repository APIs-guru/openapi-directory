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
class OrgPolicy:
    r"""OrgPolicy
    Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
    """
    
    boolean_policy: Optional[BooleanPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanPolicy') }})
    constraint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraint') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    list_policy: Optional[ListPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPolicy') }})
    restore_default: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreDefault') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
