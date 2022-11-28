from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EncryptionInfoEncryptionEntityTypeEnum(str, Enum):
    ENCRYPTION_ENTITY_TYPE_UNKNOWN = "ENCRYPTION_ENTITY_TYPE_UNKNOWN"
    DCM_ACCOUNT = "DCM_ACCOUNT"
    DCM_ADVERTISER = "DCM_ADVERTISER"
    DBM_PARTNER = "DBM_PARTNER"
    DBM_ADVERTISER = "DBM_ADVERTISER"
    ADWORDS_CUSTOMER = "ADWORDS_CUSTOMER"
    DFP_NETWORK_CODE = "DFP_NETWORK_CODE"

class EncryptionInfoEncryptionSourceEnum(str, Enum):
    ENCRYPTION_SCOPE_UNKNOWN = "ENCRYPTION_SCOPE_UNKNOWN"
    AD_SERVING = "AD_SERVING"
    DATA_TRANSFER = "DATA_TRANSFER"


@dataclass_json
@dataclass
class EncryptionInfo:
    r"""EncryptionInfo
    A description of how user IDs are encrypted.
    """
    
    encryption_entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionEntityId') }})
    encryption_entity_type: Optional[EncryptionInfoEncryptionEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionEntityType') }})
    encryption_source: Optional[EncryptionInfoEncryptionSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionSource') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
