from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LookupStreamObjectRequest:
    r"""LookupStreamObjectRequest
    Request for looking up a specific stream object by its source object identifier.
    """
    
    source_object_identifier: Optional[SourceObjectIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceObjectIdentifier') }})
    
