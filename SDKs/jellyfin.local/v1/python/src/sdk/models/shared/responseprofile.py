from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResponseProfile:
    audio_codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioCodec') }})
    conditions: Optional[List[ProfileCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Conditions') }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MimeType') }})
    org_pn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrgPn') }})
    type: Optional[DlnaProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    video_codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VideoCodec') }})
    
