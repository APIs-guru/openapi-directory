from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import sideinputinfo
from . import seqmaptaskoutputinfo


@dataclass_json
@dataclass
class SeqMapTask:
    inputs: Optional[List[sideinputinfo.SideInputInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output_infos: Optional[List[seqmaptaskoutputinfo.SeqMapTaskOutputInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputInfos' }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemName' }})
    user_fn: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userFn' }})
    
