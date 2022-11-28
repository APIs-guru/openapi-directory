from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Deinterlace:
    r"""Deinterlace
    Deinterlace configuration for input video.
    """
    
    bwdif: Optional[BwdifConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bwdif') }})
    yadif: Optional[YadifConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yadif') }})
    
