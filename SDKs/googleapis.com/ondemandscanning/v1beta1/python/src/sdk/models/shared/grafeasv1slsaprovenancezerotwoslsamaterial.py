from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial:
    r"""GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial
    The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on.
    """
    
    digest: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
