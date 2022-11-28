from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoWorkflowParameters:
    r"""EnterpriseCrmFrontendsEventbusProtoWorkflowParameters
    LINT.IfChange This is the frontend version of WorkflowParameters. It's exactly like the backend version except that instead of flattening protobuf parameters and treating every field and subfield of a protobuf parameter as a separate parameter, the fields/subfields of a protobuf parameter will be nested as \"children\" (see 'children' field below) parameters of the parent parameter. Please refer to enterprise/crm/eventbus/proto/workflow_parameters.proto for more information about WorkflowParameters.
    """
    
    parameters: Optional[List[EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
