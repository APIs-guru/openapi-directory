from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import usage
from . import usage
from . import dualregional
from . import multiregional
from . import usage
from . import usage
from . import regional


@dataclass_json
@dataclass
class CloudStorageWorkload:
    data_retrieval: Optional[usage.Usage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataRetrieval' }})
    data_stored: Optional[usage.Usage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataStored' }})
    dual_region: Optional[dualregional.DualRegional] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dualRegion' }})
    multi_region: Optional[multiregional.MultiRegional] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiRegion' }})
    operation_a: Optional[usage.Usage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationA' }})
    operation_b: Optional[usage.Usage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationB' }})
    region: Optional[regional.Regional] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageClass' }})
    
