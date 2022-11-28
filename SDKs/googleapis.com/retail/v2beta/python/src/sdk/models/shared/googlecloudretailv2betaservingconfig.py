from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRetailV2betaServingConfigDiversityTypeEnum(str, Enum):
    DIVERSITY_TYPE_UNSPECIFIED = "DIVERSITY_TYPE_UNSPECIFIED"
    RULE_BASED_DIVERSITY = "RULE_BASED_DIVERSITY"
    DATA_DRIVEN_DIVERSITY = "DATA_DRIVEN_DIVERSITY"

class GoogleCloudRetailV2betaServingConfigSolutionTypesEnum(str, Enum):
    SOLUTION_TYPE_UNSPECIFIED = "SOLUTION_TYPE_UNSPECIFIED"
    SOLUTION_TYPE_RECOMMENDATION = "SOLUTION_TYPE_RECOMMENDATION"
    SOLUTION_TYPE_SEARCH = "SOLUTION_TYPE_SEARCH"


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaServingConfig:
    r"""GoogleCloudRetailV2betaServingConfig
    Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).
    """
    
    boost_control_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boostControlIds') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    diversity_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diversityLevel') }})
    diversity_type: Optional[GoogleCloudRetailV2betaServingConfigDiversityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diversityType') }})
    do_not_associate_control_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doNotAssociateControlIds') }})
    dynamic_facet_spec: Optional[GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicFacetSpec') }})
    enable_category_filter_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableCategoryFilterLevel') }})
    facet_control_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facetControlIds') }})
    filter_control_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterControlIds') }})
    ignore_control_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreControlIds') }})
    model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    oneway_synonyms_control_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onewaySynonymsControlIds') }})
    personalization_spec: Optional[GoogleCloudRetailV2betaSearchRequestPersonalizationSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalizationSpec') }})
    price_reranking_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceRerankingLevel') }})
    redirect_control_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectControlIds') }})
    replacement_control_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacementControlIds') }})
    solution_types: Optional[List[GoogleCloudRetailV2betaServingConfigSolutionTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionTypes') }})
    twoway_synonyms_control_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twowaySynonymsControlIds') }})
    
