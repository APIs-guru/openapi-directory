from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2DtmfParameters:
    r"""GoogleCloudDialogflowV2DtmfParameters
    The message in the response that indicates the parameters of DTMF.
    """
    
    accepts_dtmf_input: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptsDtmfInput') }})
    
