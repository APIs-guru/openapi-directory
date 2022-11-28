from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1RecommendationContent:
    r"""GoogleCloudRecommenderV1RecommendationContent
    Contains what resources are changing and how they are changing.
    """
    
    operation_groups: Optional[List[GoogleCloudRecommenderV1OperationGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationGroups') }})
    overview: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overview') }})
    
