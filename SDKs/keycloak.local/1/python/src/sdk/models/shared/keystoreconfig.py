from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KeyStoreConfig:
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    key_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyAlias') }})
    key_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPassword') }})
    realm_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realmAlias') }})
    realm_certificate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realmCertificate') }})
    store_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storePassword') }})
    
