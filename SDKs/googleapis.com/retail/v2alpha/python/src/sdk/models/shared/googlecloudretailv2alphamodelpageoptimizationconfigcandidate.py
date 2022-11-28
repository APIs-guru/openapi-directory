from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate:
    r"""GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate
    A candidate to consider for a given panel. Currently only ServingConfig are valid candidates.
    """
    
    serving_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingConfigId') }})
    
