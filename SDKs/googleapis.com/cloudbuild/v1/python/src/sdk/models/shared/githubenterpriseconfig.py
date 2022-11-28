from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GitHubEnterpriseConfig:
    r"""GitHubEnterpriseConfig
    GitHubEnterpriseConfig represents a configuration for a GitHub Enterprise server.
    """
    
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    host_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostUrl') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    peered_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeredNetwork') }})
    secrets: Optional[GitHubEnterpriseSecrets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    ssl_ca: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslCa') }})
    webhook_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookKey') }})
    

@dataclass_json
@dataclass
class GitHubEnterpriseConfigInput:
    r"""GitHubEnterpriseConfigInput
    GitHubEnterpriseConfig represents a configuration for a GitHub Enterprise server.
    """
    
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    host_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostUrl') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    peered_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeredNetwork') }})
    secrets: Optional[GitHubEnterpriseSecrets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    ssl_ca: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslCa') }})
    webhook_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookKey') }})
    
