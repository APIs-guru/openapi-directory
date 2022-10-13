from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import androidmodel
from . import androidruntimeconfiguration
from . import androidversion


@dataclass_json
@dataclass
class AndroidDeviceCatalog:
    models: Optional[List[androidmodel.AndroidModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'models' }})
    runtime_configuration: Optional[androidruntimeconfiguration.AndroidRuntimeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeConfiguration' }})
    versions: Optional[List[androidversion.AndroidVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    
