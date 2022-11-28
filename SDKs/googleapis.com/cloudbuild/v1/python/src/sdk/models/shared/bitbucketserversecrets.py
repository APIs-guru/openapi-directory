from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BitbucketServerSecrets:
    r"""BitbucketServerSecrets
    BitbucketServerSecrets represents the secrets in Secret Manager for a Bitbucket Server.
    """
    
    admin_access_token_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminAccessTokenVersionName') }})
    read_access_token_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readAccessTokenVersionName') }})
    webhook_secret_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookSecretVersionName') }})
    
