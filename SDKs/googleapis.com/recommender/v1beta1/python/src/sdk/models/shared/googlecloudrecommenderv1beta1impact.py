from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRecommenderV1beta1ImpactCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    COST = "COST"
    SECURITY = "SECURITY"
    PERFORMANCE = "PERFORMANCE"
    MANAGEABILITY = "MANAGEABILITY"
    SUSTAINABILITY = "SUSTAINABILITY"
    RELIABILITY = "RELIABILITY"


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1Impact:
    r"""GoogleCloudRecommenderV1beta1Impact
    Contains the impact a recommendation can have for a given category.
    """
    
    category: Optional[GoogleCloudRecommenderV1beta1ImpactCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    cost_projection: Optional[GoogleCloudRecommenderV1beta1CostProjection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costProjection') }})
    reliability_projection: Optional[GoogleCloudRecommenderV1beta1ReliabilityProjection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reliabilityProjection') }})
    security_projection: Optional[GoogleCloudRecommenderV1beta1SecurityProjection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProjection') }})
    sustainability_projection: Optional[GoogleCloudRecommenderV1beta1SustainabilityProjection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainabilityProjection') }})
    
