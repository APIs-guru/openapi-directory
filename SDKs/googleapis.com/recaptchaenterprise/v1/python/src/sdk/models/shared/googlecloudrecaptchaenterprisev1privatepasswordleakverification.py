from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification:
    encrypted_leak_match_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptedLeakMatchPrefixes' }})
    encrypted_user_credentials_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptedUserCredentialsHash' }})
    lookup_hash_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookupHashPrefix' }})
    reencrypted_user_credentials_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reencryptedUserCredentialsHash' }})
    
