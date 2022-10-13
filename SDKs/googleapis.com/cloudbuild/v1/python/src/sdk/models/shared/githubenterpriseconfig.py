from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import githubenterprisesecrets


@dataclass_json
@dataclass
class GitHubEnterpriseConfig:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    host_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    peered_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peeredNetwork' }})
    secrets: Optional[githubenterprisesecrets.GitHubEnterpriseSecrets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    ssl_ca: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslCa' }})
    webhook_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookKey' }})
    
