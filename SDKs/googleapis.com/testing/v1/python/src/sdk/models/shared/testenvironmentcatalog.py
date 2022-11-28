from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestEnvironmentCatalog:
    r"""TestEnvironmentCatalog
    A description of a test environment.
    """
    
    android_device_catalog: Optional[AndroidDeviceCatalog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDeviceCatalog') }})
    device_ip_block_catalog: Optional[DeviceIPBlockCatalog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIpBlockCatalog') }})
    ios_device_catalog: Optional[IosDeviceCatalog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosDeviceCatalog') }})
    network_configuration_catalog: Optional[NetworkConfigurationCatalog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfigurationCatalog') }})
    software_catalog: Optional[ProvidedSoftwareCatalog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareCatalog') }})
    
