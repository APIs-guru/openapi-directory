from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ByProducts:
    r"""ByProducts
    Defines an object for the byproducts field in in-toto links. The suggested fields are \"stderr\", \"stdout\", and \"return-value\".
    """
    
    custom_values: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customValues') }})
    
