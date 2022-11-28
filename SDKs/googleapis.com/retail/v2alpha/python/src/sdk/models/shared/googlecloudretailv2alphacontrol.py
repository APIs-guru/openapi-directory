from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum(str, Enum):
    SEARCH_SOLUTION_USE_CASE_UNSPECIFIED = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
    SEARCH_SOLUTION_USE_CASE_SEARCH = "SEARCH_SOLUTION_USE_CASE_SEARCH"
    SEARCH_SOLUTION_USE_CASE_BROWSE = "SEARCH_SOLUTION_USE_CASE_BROWSE"

class GoogleCloudRetailV2alphaControlSolutionTypesEnum(str, Enum):
    SOLUTION_TYPE_UNSPECIFIED = "SOLUTION_TYPE_UNSPECIFIED"
    SOLUTION_TYPE_RECOMMENDATION = "SOLUTION_TYPE_RECOMMENDATION"
    SOLUTION_TYPE_SEARCH = "SOLUTION_TYPE_SEARCH"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaControlInput:
    r"""GoogleCloudRetailV2alphaControlInput
    Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    facet_spec: Optional[GoogleCloudRetailV2alphaSearchRequestFacetSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facetSpec') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rule: Optional[GoogleCloudRetailV2alphaRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    search_solution_use_case: Optional[List[GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchSolutionUseCase') }})
    solution_types: Optional[List[GoogleCloudRetailV2alphaControlSolutionTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionTypes') }})
    

@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaControl:
    r"""GoogleCloudRetailV2alphaControl
    Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
    """
    
    associated_serving_config_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedServingConfigIds') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    facet_spec: Optional[GoogleCloudRetailV2alphaSearchRequestFacetSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facetSpec') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rule: Optional[GoogleCloudRetailV2alphaRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    search_solution_use_case: Optional[List[GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchSolutionUseCase') }})
    solution_types: Optional[List[GoogleCloudRetailV2alphaControlSolutionTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionTypes') }})
    
