from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConversionsBatchInsertRequest:
    r"""ConversionsBatchInsertRequest
    Insert Conversions Request.
    """
    
    conversions: Optional[List[Conversion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversions') }})
    encryption_info: Optional[EncryptionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionInfo') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
