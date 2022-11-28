from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SmimeInfo:
    r"""SmimeInfo
    An S/MIME email config.
    """
    
    encrypted_key_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedKeyPassword') }})
    expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefault') }})
    issuer_cn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuerCn') }})
    pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pem') }})
    pkcs12: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pkcs12') }})
    
