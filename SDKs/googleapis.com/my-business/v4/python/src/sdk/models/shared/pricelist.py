from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PriceList:
    r"""PriceList
    A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood.
    """
    
    labels: Optional[List[Label]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    price_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceListId') }})
    sections: Optional[List[Section]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUrl') }})
    
