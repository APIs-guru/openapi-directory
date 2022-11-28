from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata:
    r"""GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata
    Other properties of the build.
    """
    
    build_finished_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildFinishedOn') }})
    build_invocation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildInvocationId') }})
    build_started_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildStartedOn') }})
    completeness: Optional[GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completeness') }})
    reproducible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reproducible') }})
    
