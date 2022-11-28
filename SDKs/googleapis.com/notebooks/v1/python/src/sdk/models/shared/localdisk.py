from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocalDiskInput:
    r"""LocalDiskInput
    A Local attached disk resource.
    """
    
    initialize_params: Optional[LocalDiskInitializeParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializeParams') }})
    interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class LocalDisk:
    r"""LocalDisk
    A Local attached disk resource.
    """
    
    auto_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoDelete') }})
    boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boot') }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    guest_os_features: Optional[List[RuntimeGuestOsFeature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestOsFeatures') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    initialize_params: Optional[LocalDiskInitializeParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializeParams') }})
    interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    licenses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenses') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
