from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import templatemetadata
from . import runtimemetadata
from . import status

class GetTemplateResponseTemplateTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    LEGACY = "LEGACY"
    FLEX = "FLEX"


@dataclass_json
@dataclass
class GetTemplateResponse:
    metadata: Optional[templatemetadata.TemplateMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    runtime_metadata: Optional[runtimemetadata.RuntimeMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeMetadata' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    template_type: Optional[GetTemplateResponseTemplateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateType' }})
    
