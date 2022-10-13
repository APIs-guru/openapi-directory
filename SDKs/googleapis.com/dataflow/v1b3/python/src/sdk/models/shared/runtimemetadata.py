from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parametermetadata
from . import sdkinfo


@dataclass_json
@dataclass
class RuntimeMetadata:
    parameters: Optional[List[parametermetadata.ParameterMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    sdk_info: Optional[sdkinfo.SdkInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdkInfo' }})
    
