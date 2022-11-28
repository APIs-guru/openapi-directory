from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatchRule:
    r"""GoogleCloudContactcenterinsightsV1PhraseMatchRule
    The data for a phrase match rule.
    """
    
    config: Optional[GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    negated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negated') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
