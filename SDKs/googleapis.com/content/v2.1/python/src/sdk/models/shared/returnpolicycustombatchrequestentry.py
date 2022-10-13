from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import returnpolicy


@dataclass_json
@dataclass
class ReturnpolicyCustomBatchRequestEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    return_policy: Optional[returnpolicy.ReturnPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPolicy' }})
    return_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPolicyId' }})
    
