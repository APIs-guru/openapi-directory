from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AndroidDeviceCatalog:
    r"""AndroidDeviceCatalog
    The currently supported Android devices.
    """
    
    models: Optional[List[AndroidModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('models') }})
    runtime_configuration: Optional[AndroidRuntimeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeConfiguration') }})
    versions: Optional[List[AndroidVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
