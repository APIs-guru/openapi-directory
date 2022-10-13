from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import servicedirectoryconfig


@dataclass_json
@dataclass
class GitLabEnterpriseConfig:
    host_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostUri' }})
    service_directory_config: Optional[servicedirectoryconfig.ServiceDirectoryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDirectoryConfig' }})
    ssl_ca: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslCa' }})
    
