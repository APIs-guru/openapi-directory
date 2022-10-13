from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotocondition


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoCombinedCondition:
    conditions: Optional[List[enterprisecrmeventbusprotocondition.EnterpriseCrmEventbusProtoCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    
