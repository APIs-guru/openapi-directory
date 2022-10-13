from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyusageoptions
from . import extendedkeyusageoptions
from . import objectid


@dataclass_json
@dataclass
class KeyUsage:
    base_key_usage: Optional[keyusageoptions.KeyUsageOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseKeyUsage' }})
    extended_key_usage: Optional[extendedkeyusageoptions.ExtendedKeyUsageOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extendedKeyUsage' }})
    unknown_extended_key_usages: Optional[List[objectid.ObjectID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unknownExtendedKeyUsages' }})
    
