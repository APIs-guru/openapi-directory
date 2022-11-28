from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GitLabSecrets:
    r"""GitLabSecrets
    GitLabSecrets represents the secrets in Secret Manager for a GitLab integration.
    """
    
    api_access_token_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiAccessTokenVersion') }})
    api_key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyVersion') }})
    read_access_token_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readAccessTokenVersion') }})
    webhook_secret_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookSecretVersion') }})
    
