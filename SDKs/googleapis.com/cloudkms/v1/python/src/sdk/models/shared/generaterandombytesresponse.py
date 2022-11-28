from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GenerateRandomBytesResponse:
    r"""GenerateRandomBytesResponse
    Response message for KeyManagementService.GenerateRandomBytes.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    data_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCrc32c') }})
    
