from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bitbucketserverrepositoryid
from . import bitbucketserversecrets


@dataclass_json
@dataclass
class BitbucketServerConfig:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    connected_repositories: Optional[List[bitbucketserverrepositoryid.BitbucketServerRepositoryID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectedRepositories' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    host_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostUri' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    peered_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peeredNetwork' }})
    secrets: Optional[bitbucketserversecrets.BitbucketServerSecrets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    ssl_ca: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslCa' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    webhook_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookKey' }})
    
