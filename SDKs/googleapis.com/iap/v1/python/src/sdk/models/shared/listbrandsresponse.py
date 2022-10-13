from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import brand


@dataclass_json
@dataclass
class ListBrandsResponse:
    brands: Optional[List[brand.Brand]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brands' }})
    
