from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ElasticConfig:
    r"""ElasticConfig
    The configuration for elastic access
    """
    
    cluster_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterUri') }})
    headers: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    index: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
