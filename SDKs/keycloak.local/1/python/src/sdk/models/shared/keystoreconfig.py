from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeyStoreConfig:
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    key_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyAlias' }})
    key_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPassword' }})
    realm_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realmAlias' }})
    realm_certificate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realmCertificate' }})
    store_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storePassword' }})
    
