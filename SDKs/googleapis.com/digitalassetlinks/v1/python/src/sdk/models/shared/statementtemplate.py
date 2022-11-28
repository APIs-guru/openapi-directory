from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StatementTemplate:
    r"""StatementTemplate
    A single statement to check in a bulk call using BulkCheck. See CheckRequest for details about each field.
    """
    
    relation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relation') }})
    source: Optional[Asset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: Optional[Asset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
