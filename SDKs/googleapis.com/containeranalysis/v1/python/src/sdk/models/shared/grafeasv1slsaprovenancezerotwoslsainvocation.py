from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation:
    r"""GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation
    Identifies the event that kicked off the build.
    """
    
    config_source: Optional[GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSource') }})
    environment: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
