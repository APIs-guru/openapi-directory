from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import plannode


@dataclass_json
@dataclass
class QueryPlan:
    plan_nodes: Optional[List[plannode.PlanNode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planNodes' }})
    
