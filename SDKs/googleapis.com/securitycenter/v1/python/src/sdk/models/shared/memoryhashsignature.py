from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MemoryHashSignature:
    r"""MemoryHashSignature
    A signature corresponding to memory page hashes.
    """
    
    binary_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryFamily') }})
    detections: Optional[List[Detection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detections') }})
    
