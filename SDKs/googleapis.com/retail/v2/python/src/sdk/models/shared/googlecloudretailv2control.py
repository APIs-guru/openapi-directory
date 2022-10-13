from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2rule

class GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum(str, Enum):
    SEARCH_SOLUTION_USE_CASE_UNSPECIFIED = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
    SEARCH_SOLUTION_USE_CASE_SEARCH = "SEARCH_SOLUTION_USE_CASE_SEARCH"
    SEARCH_SOLUTION_USE_CASE_BROWSE = "SEARCH_SOLUTION_USE_CASE_BROWSE"

class GoogleCloudRetailV2ControlSolutionTypesEnum(str, Enum):
    SOLUTION_TYPE_UNSPECIFIED = "SOLUTION_TYPE_UNSPECIFIED"
    SOLUTION_TYPE_RECOMMENDATION = "SOLUTION_TYPE_RECOMMENDATION"
    SOLUTION_TYPE_SEARCH = "SOLUTION_TYPE_SEARCH"


@dataclass_json
@dataclass
class GoogleCloudRetailV2Control:
    associated_serving_config_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedServingConfigIds' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rule: Optional[googlecloudretailv2rule.GoogleCloudRetailV2Rule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule' }})
    search_solution_use_case: Optional[List[GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchSolutionUseCase' }})
    solution_types: Optional[List[GoogleCloudRetailV2ControlSolutionTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionTypes' }})
    
