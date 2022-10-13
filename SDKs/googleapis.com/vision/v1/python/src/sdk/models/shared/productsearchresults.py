from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupedresult
from . import result


@dataclass_json
@dataclass
class ProductSearchResults:
    index_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexTime' }})
    product_grouped_results: Optional[List[groupedresult.GroupedResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productGroupedResults' }})
    results: Optional[List[result.Result]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
