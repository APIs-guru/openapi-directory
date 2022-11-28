from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BitbucketServerConfig:
    r"""BitbucketServerConfig
    BitbucketServerConfig represents the configuration for a Bitbucket Server.
    """
    
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    connected_repositories: Optional[List[BitbucketServerRepositoryID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectedRepositories') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    host_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostUri') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    peered_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeredNetwork') }})
    secrets: Optional[BitbucketServerSecrets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    ssl_ca: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslCa') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    webhook_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookKey') }})
    

@dataclass_json
@dataclass
class BitbucketServerConfigInput:
    r"""BitbucketServerConfigInput
    BitbucketServerConfig represents the configuration for a Bitbucket Server.
    """
    
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    host_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostUri') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    peered_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeredNetwork') }})
    secrets: Optional[BitbucketServerSecrets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    ssl_ca: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslCa') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
