from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import importproductsetsgcssource


@dataclass_json
@dataclass
class ImportProductSetsInputConfig:
    gcs_source: Optional[importproductsetsgcssource.ImportProductSetsGcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    
