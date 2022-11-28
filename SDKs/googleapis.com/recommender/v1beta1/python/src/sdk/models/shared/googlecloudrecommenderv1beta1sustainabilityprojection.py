from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1SustainabilityProjection:
    r"""GoogleCloudRecommenderV1beta1SustainabilityProjection
    Contains metadata about how much sustainability a recommendation can save or incur.
    """
    
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    kg_co2e: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kgCO2e') }})
    
