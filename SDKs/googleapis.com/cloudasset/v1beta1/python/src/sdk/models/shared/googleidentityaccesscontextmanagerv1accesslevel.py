from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1AccessLevel:
    r"""GoogleIdentityAccesscontextmanagerV1AccessLevel
    An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
    """
    
    basic: Optional[GoogleIdentityAccesscontextmanagerV1BasicLevel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basic') }})
    custom: Optional[GoogleIdentityAccesscontextmanagerV1CustomLevel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
