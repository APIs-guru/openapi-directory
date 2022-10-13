from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import vmwarevmdetails


@dataclass_json
@dataclass
class VmwareVmsDetails:
    details: Optional[List[vmwarevmdetails.VmwareVMDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    
