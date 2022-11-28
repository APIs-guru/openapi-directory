from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KeyUsageOptions:
    r"""KeyUsageOptions
    KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3.
    """
    
    cert_sign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certSign') }})
    content_commitment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentCommitment') }})
    crl_sign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crlSign') }})
    data_encipherment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataEncipherment') }})
    decipher_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decipherOnly') }})
    digital_signature: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digitalSignature') }})
    encipher_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encipherOnly') }})
    key_agreement: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyAgreement') }})
    key_encipherment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyEncipherment') }})
    
