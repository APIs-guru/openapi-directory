from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum(str, Enum):
    IMPORT_OPTION_UNSPECIFIED = "IMPORT_OPTION_UNSPECIFIED"
    KEEP = "KEEP"
    FALLBACK = "FALLBACK"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ImportFlowRequest:
    r"""GoogleCloudDialogflowCxV3ImportFlowRequest
    The request message for Flows.ImportFlow.
    """
    
    flow_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowContent') }})
    flow_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowUri') }})
    import_option: Optional[GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importOption') }})
    
