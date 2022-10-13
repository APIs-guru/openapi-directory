from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bwdifconfig
from . import yadifconfig


@dataclass_json
@dataclass
class Deinterlace:
    bwdif: Optional[bwdifconfig.BwdifConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bwdif' }})
    yadif: Optional[yadifconfig.YadifConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yadif' }})
    
