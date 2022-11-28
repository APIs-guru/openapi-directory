from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource:
    r"""GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource
    Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.
    """
    
    digest: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    entry_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoint') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
