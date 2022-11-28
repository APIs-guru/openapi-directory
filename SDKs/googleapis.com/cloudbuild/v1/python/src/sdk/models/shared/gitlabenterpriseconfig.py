from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GitLabEnterpriseConfig:
    r"""GitLabEnterpriseConfig
    GitLabEnterpriseConfig represents the configuration for a GitLabEnterprise integration.
    """
    
    host_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostUri') }})
    service_directory_config: Optional[ServiceDirectoryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDirectoryConfig') }})
    ssl_ca: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslCa') }})
    
