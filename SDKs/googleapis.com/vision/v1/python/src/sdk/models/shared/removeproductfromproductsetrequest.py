from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RemoveProductFromProductSetRequest:
    r"""RemoveProductFromProductSetRequest
    Request message for the `RemoveProductFromProductSet` method.
    """
    
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    
