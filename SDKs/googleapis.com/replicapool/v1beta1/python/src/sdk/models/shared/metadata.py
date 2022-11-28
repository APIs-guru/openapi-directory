from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metadata:
    r"""Metadata
    A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
    """
    
    finger_print: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerPrint') }})
    items: Optional[List[MetadataItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
