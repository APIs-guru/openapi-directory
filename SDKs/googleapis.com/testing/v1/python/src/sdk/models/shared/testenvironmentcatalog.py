from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import androiddevicecatalog
from . import deviceipblockcatalog
from . import iosdevicecatalog
from . import networkconfigurationcatalog
from . import providedsoftwarecatalog


@dataclass_json
@dataclass
class TestEnvironmentCatalog:
    android_device_catalog: Optional[androiddevicecatalog.AndroidDeviceCatalog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidDeviceCatalog' }})
    device_ip_block_catalog: Optional[deviceipblockcatalog.DeviceIPBlockCatalog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceIpBlockCatalog' }})
    ios_device_catalog: Optional[iosdevicecatalog.IosDeviceCatalog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosDeviceCatalog' }})
    network_configuration_catalog: Optional[networkconfigurationcatalog.NetworkConfigurationCatalog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfigurationCatalog' }})
    software_catalog: Optional[providedsoftwarecatalog.ProvidedSoftwareCatalog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'softwareCatalog' }})
    
