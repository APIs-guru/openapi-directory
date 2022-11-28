from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Encryption:
    r"""Encryption
    Encryption settings.
    """
    
    aes128: Optional[Aes128Encryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aes128') }})
    iv: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iv') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    mpeg_cenc: Optional[MpegCommonEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mpegCenc') }})
    sample_aes: Optional[SampleAesEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleAes') }})
    
