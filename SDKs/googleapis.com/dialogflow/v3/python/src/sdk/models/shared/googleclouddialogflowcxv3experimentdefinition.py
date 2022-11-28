from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ExperimentDefinition:
    r"""GoogleCloudDialogflowCxV3ExperimentDefinition
    Definition of the experiment.
    """
    
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    version_variants: Optional[GoogleCloudDialogflowCxV3VersionVariants] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionVariants') }})
    
