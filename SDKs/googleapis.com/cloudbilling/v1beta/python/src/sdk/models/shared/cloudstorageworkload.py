from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudStorageWorkload:
    r"""CloudStorageWorkload
    Specifies usage of Cloud Storage resources.
    """
    
    data_retrieval: Optional[Usage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRetrieval') }})
    data_stored: Optional[Usage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataStored') }})
    dual_region: Optional[DualRegional] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dualRegion') }})
    multi_region: Optional[MultiRegional] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiRegion') }})
    operation_a: Optional[Usage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationA') }})
    operation_b: Optional[Usage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationB') }})
    region: Optional[Regional] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageClass') }})
    
