from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2Rule:
    r"""GoogleCloudRetailV2Rule
    A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
    """
    
    boost_action: Optional[GoogleCloudRetailV2RuleBoostAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boostAction') }})
    condition: Optional[GoogleCloudRetailV2Condition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    do_not_associate_action: Optional[GoogleCloudRetailV2RuleDoNotAssociateAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doNotAssociateAction') }})
    filter_action: Optional[GoogleCloudRetailV2RuleFilterAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterAction') }})
    ignore_action: Optional[GoogleCloudRetailV2RuleIgnoreAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreAction') }})
    oneway_synonyms_action: Optional[GoogleCloudRetailV2RuleOnewaySynonymsAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onewaySynonymsAction') }})
    redirect_action: Optional[GoogleCloudRetailV2RuleRedirectAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectAction') }})
    replacement_action: Optional[GoogleCloudRetailV2RuleReplacementAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacementAction') }})
    twoway_synonyms_action: Optional[GoogleCloudRetailV2RuleTwowaySynonymsAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twowaySynonymsAction') }})
    
