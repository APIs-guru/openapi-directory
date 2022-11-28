from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MacVerifyRequest:
    r"""MacVerifyRequest
    Request message for KeyManagementService.MacVerify.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    data_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCrc32c') }})
    mac: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    mac_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macCrc32c') }})
    
