from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IosDeviceCatalog:
    r"""IosDeviceCatalog
    The currently supported iOS devices.
    """
    
    models: Optional[List[IosModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('models') }})
    runtime_configuration: Optional[IosRuntimeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeConfiguration') }})
    versions: Optional[List[IosVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    xcode_versions: Optional[List[XcodeVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xcodeVersions') }})
    
