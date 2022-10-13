from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    encryption_entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionEntityId' }})
    encryption_entity_type: Optional[EncryptionInfoEncryptionEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionEntityType' }})
    encryption_source: Optional[EncryptionInfoEncryptionSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionSource' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
