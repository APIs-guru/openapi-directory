from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DistributionArchitectureEnum(str, Enum):
    ARCHITECTURE_UNSPECIFIED = "ARCHITECTURE_UNSPECIFIED"
    X86 = "X86"
    X64 = "X64"


@dataclass_json
@dataclass
class Distribution:
    r"""Distribution
    This represents a particular channel of distribution for a given package. e.g. Debian's jessie-backports dpkg mirror
    """
    
    architecture: Optional[DistributionArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpeUri') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    latest_version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestVersion') }})
    maintainer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintainer') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
