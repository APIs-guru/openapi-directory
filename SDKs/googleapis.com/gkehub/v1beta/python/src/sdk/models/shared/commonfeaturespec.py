from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommonFeatureSpec:
    r"""CommonFeatureSpec
    CommonFeatureSpec contains Hub-wide configuration information
    """
    
    anthosobservability: Optional[AnthosObservabilityFeatureSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anthosobservability') }})
    appdevexperience: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appdevexperience') }})
    fleetobservability: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    multiclusteringress: Optional[MultiClusterIngressFeatureSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiclusteringress') }})
    
