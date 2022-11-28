from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MethodMap:
    r"""MethodMap
    Deployment Manager will call these methods during the events of creation/deletion/update/get/setIamPolicy
    """
    
    create: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create') }})
    delete: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    get: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('get') }})
    set_iam_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setIamPolicy') }})
    update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    
