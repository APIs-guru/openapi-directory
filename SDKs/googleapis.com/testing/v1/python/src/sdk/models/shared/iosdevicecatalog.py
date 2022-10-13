from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import iosmodel
from . import iosruntimeconfiguration
from . import iosversion
from . import xcodeversion


@dataclass_json
@dataclass
class IosDeviceCatalog:
    models: Optional[List[iosmodel.IosModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'models' }})
    runtime_configuration: Optional[iosruntimeconfiguration.IosRuntimeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeConfiguration' }})
    versions: Optional[List[iosversion.IosVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    xcode_versions: Optional[List[xcodeversion.XcodeVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xcodeVersions' }})
    
