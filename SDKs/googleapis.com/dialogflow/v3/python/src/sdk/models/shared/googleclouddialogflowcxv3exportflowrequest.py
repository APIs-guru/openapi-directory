from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ExportFlowRequest:
    flow_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowUri' }})
    include_referenced_flows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeReferencedFlows' }})
    
