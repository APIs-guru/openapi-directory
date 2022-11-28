from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AsymmetricSignRequest:
    r"""AsymmetricSignRequest
    Request message for KeyManagementService.AsymmetricSign.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    data_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCrc32c') }})
    digest: Optional[Digest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    digest_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digestCrc32c') }})
    
