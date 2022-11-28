from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProcessSignature:
    r"""ProcessSignature
    Indicates what signature matched this process.
    """
    
    memory_hash_signature: Optional[MemoryHashSignature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryHashSignature') }})
    yara_rule_signature: Optional[YaraRuleSignature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yaraRuleSignature') }})
    
