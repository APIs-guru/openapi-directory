from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clusterconfiguration
from . import clustercustomer


@dataclass_json
@dataclass
class ClusterRequest:
    configuration: Optional[clusterconfiguration.ClusterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    customers: Optional[List[clustercustomer.ClusterCustomer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customers' }})
    
