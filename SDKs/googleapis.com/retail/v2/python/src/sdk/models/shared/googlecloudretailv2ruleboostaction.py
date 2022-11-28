from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2RuleBoostAction:
    r"""GoogleCloudRetailV2RuleBoostAction
    A boost action to apply to results matching condition specified above.
    """
    
    boost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boost') }})
    products_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productsFilter') }})
    
