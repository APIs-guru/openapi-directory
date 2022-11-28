from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput:
    r"""GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput
    Private password leak verification info.
    """
    
    encrypted_user_credentials_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedUserCredentialsHash') }})
    lookup_hash_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookupHashPrefix') }})
    

@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification:
    r"""GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification
    Private password leak verification info.
    """
    
    encrypted_leak_match_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedLeakMatchPrefixes') }})
    encrypted_user_credentials_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedUserCredentialsHash') }})
    lookup_hash_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookupHashPrefix') }})
    reencrypted_user_credentials_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reencryptedUserCredentialsHash') }})
    
