from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SlsaProvenanceZeroTwo:
    r"""SlsaProvenanceZeroTwo
    See full explanation of fields at slsa.dev/provenance/v0.2.
    """
    
    build_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildConfig') }})
    build_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildType') }})
    builder: Optional[GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builder') }})
    invocation: Optional[GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invocation') }})
    materials: Optional[List[GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    metadata: Optional[GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
