from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ExportFlowRequest:
    r"""GoogleCloudDialogflowCxV3beta1ExportFlowRequest
    The request message for Flows.ExportFlow.
    """
    
    flow_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowUri') }})
    include_referenced_flows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeReferencedFlows') }})
    
