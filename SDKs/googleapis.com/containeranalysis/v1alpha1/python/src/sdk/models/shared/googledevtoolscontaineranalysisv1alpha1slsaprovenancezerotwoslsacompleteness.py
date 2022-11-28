from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness:
    r"""GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness
    Indicates that the builder claims certain fields in this message to be complete.
    """
    
    environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    materials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    parameters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
