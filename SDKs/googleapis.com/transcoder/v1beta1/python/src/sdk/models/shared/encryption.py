from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aes128encryption
from . import mpegcommonencryption
from . import sampleaesencryption


@dataclass_json
@dataclass
class Encryption:
    aes128: Optional[aes128encryption.Aes128Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aes128' }})
    iv: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iv' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    mpeg_cenc: Optional[mpegcommonencryption.MpegCommonEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mpegCenc' }})
    sample_aes: Optional[sampleaesencryption.SampleAesEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleAes' }})
    
