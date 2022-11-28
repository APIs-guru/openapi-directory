from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CollectionFeaturedProduct:
    r"""CollectionFeaturedProduct
    The message for FeaturedProduct. [FeaturedProduct](https://support.google.com/merchants/answer/9703736)
    """
    
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x') }})
    y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y') }})
    
