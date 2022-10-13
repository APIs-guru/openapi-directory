from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum(str, Enum):
    IMPORT_OPTION_UNSPECIFIED = "IMPORT_OPTION_UNSPECIFIED"
    KEEP = "KEEP"
    FALLBACK = "FALLBACK"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ImportFlowRequest:
    flow_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowContent' }})
    flow_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowUri' }})
    import_option: Optional[GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importOption' }})
    
