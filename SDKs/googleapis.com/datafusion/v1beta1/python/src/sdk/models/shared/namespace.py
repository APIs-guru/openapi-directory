from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iampolicy


@dataclass_json
@dataclass
class Namespace:
    iam_policy: Optional[iampolicy.IamPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamPolicy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
