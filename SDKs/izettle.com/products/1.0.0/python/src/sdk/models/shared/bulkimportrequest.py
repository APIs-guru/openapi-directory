from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import fullproductupdaterequest


@dataclass_json
@dataclass
class BulkImportRequest:
    products: List[fullproductupdaterequest.FullProductUpdateRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    
