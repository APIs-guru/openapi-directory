from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeyUsageOptions:
    cert_sign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certSign' }})
    content_commitment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentCommitment' }})
    crl_sign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crlSign' }})
    data_encipherment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataEncipherment' }})
    decipher_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decipherOnly' }})
    digital_signature: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digitalSignature' }})
    encipher_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encipherOnly' }})
    key_agreement: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyAgreement' }})
    key_encipherment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyEncipherment' }})
    
