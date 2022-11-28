from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SigningKey:
    r"""SigningKey
    This defines the format used to record keys used in the software supply chain. An in-toto link is attested using one or more keys defined in the in-toto layout. An example of this is: { \"key_id\": \"776a00e29f3559e0141b3b096f696abc6cfb0c657ab40f441132b345b0...\", \"key_type\": \"rsa\", \"public_key_value\": \"-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0B...\", \"key_scheme\": \"rsassa-pss-sha256\" } The format for in-toto's key definition can be found in section 4.2 of the in-toto specification.
    """
    
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyId') }})
    key_scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyScheme') }})
    key_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyType') }})
    public_key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyValue') }})
    
