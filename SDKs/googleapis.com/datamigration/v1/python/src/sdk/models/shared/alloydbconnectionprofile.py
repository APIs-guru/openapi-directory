from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlloyDbConnectionProfileInput:
    r"""AlloyDbConnectionProfileInput
    Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
    """
    
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    settings: Optional[AlloyDbSettingsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclass
class AlloyDbConnectionProfile:
    r"""AlloyDbConnectionProfile
    Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
    """
    
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    settings: Optional[AlloyDbSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
