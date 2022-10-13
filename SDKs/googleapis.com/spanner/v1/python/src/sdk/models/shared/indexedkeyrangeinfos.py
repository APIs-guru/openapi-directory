from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import keyrangeinfos


@dataclass_json
@dataclass
class IndexedKeyRangeInfos:
    key_range_infos: Optional[dict[str, keyrangeinfos.KeyRangeInfos]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyRangeInfos' }})
    
