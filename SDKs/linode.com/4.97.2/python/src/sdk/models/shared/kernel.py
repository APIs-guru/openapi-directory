from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class KernelArchitectureEnum(str, Enum):
    X86_64 = "x86_64"
    I386 = "i386"


@dataclass_json
@dataclass
class Kernel:
    r"""Kernel
    Linux kernel object
    """
    
    architecture: Optional[KernelArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    deprecated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kvm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kvm') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    pvops: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvops') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    xen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xen') }})
    
