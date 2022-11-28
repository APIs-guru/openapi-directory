from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GetTemplateResponseTemplateTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    LEGACY = "LEGACY"
    FLEX = "FLEX"


@dataclass_json
@dataclass
class GetTemplateResponse:
    r"""GetTemplateResponse
    The response to a GetTemplate request.
    """
    
    metadata: Optional[TemplateMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    runtime_metadata: Optional[RuntimeMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeMetadata') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    template_type: Optional[GetTemplateResponseTemplateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateType') }})
    
