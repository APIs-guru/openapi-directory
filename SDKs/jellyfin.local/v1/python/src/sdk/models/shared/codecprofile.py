from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import profilecondition
from . import profilecondition
from . import codectype_enum


@dataclass_json
@dataclass
class CodecProfile:
    apply_conditions: Optional[List[profilecondition.ProfileCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplyConditions' }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Codec' }})
    conditions: Optional[List[profilecondition.ProfileCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Conditions' }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    type: Optional[codectype_enum.CodecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
