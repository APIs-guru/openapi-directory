from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conversion
from . import encryptioninfo


@dataclass_json
@dataclass
class ConversionsBatchInsertRequest:
    conversions: Optional[List[conversion.Conversion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversions' }})
    encryption_info: Optional[encryptioninfo.EncryptionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionInfo' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
