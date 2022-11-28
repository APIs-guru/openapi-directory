from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GitHubEnterpriseSecrets:
    r"""GitHubEnterpriseSecrets
    GitHubEnterpriseSecrets represents the names of all necessary secrets in Secret Manager for a GitHub Enterprise server. Format is: projects//secrets/.
    """
    
    oauth_client_id_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthClientIdName') }})
    oauth_client_id_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthClientIdVersionName') }})
    oauth_secret_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthSecretName') }})
    oauth_secret_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthSecretVersionName') }})
    private_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKeyName') }})
    private_key_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKeyVersionName') }})
    webhook_secret_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookSecretName') }})
    webhook_secret_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookSecretVersionName') }})
    
