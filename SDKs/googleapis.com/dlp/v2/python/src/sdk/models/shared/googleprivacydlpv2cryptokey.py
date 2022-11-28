from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CryptoKey:
    r"""GooglePrivacyDlpV2CryptoKey
    This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.
    """
    
    kms_wrapped: Optional[GooglePrivacyDlpV2KmsWrappedCryptoKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsWrapped') }})
    transient: Optional[GooglePrivacyDlpV2TransientCryptoKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transient') }})
    unwrapped: Optional[GooglePrivacyDlpV2UnwrappedCryptoKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unwrapped') }})
    
