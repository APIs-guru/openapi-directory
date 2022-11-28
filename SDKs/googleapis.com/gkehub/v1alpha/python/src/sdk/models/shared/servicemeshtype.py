from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceMeshType:
    r"""ServiceMeshType
    A unique identifier for the type of message. Display_name is intended to be human-readable, code is intended to be machine readable. There should be a one-to-one mapping between display_name and code. (i.e. do not re-use display_names or codes between message types.) See istio.analysis.v1alpha1.AnalysisMessageBase.Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
