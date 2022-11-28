from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AwsSourceVMDetailsFirmwareEnum(str, Enum):
    FIRMWARE_UNSPECIFIED = "FIRMWARE_UNSPECIFIED"
    EFI = "EFI"
    BIOS = "BIOS"


@dataclass_json
@dataclass
class AwsSourceVMDetails:
    r"""AwsSourceVMDetails
    Represent the source AWS VM details.
    """
    
    committed_storage_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committedStorageBytes') }})
    firmware: Optional[AwsSourceVMDetailsFirmwareEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firmware') }})
    
