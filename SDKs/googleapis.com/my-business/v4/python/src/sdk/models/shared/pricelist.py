from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import label
from . import section


@dataclass_json
@dataclass
class PriceList:
    labels: Optional[List[label.Label]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    price_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceListId' }})
    sections: Optional[List[section.Section]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sections' }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUrl' }})
    
