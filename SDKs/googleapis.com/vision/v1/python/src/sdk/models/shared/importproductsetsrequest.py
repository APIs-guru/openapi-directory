from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import importproductsetsinputconfig


@dataclass_json
@dataclass
class ImportProductSetsRequest:
    input_config: Optional[importproductsetsinputconfig.ImportProductSetsInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    
