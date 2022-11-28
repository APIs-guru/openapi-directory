from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel:
    r"""GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel
    An individual panel with a list of ServingConfigs to consider for it.
    """
    
    candidates: Optional[List[GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidates') }})
    default_candidate: Optional[GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCandidate') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
