from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2CustomAttribute:
    r"""GoogleCloudRetailV2CustomAttribute
    A custom attribute that is not explicitly modeled in Product.
    """
    
    indexable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexable') }})
    numbers: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numbers') }})
    searchable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchable') }})
    text: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
