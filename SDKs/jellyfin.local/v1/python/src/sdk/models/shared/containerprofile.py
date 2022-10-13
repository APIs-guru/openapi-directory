from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import profilecondition
from . import dlnaprofiletype_enum


@dataclass_json
@dataclass
class ContainerProfile:
    conditions: Optional[List[profilecondition.ProfileCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Conditions' }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    type: Optional[dlnaprofiletype_enum.DlnaProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
