from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1DtmfParameters:
    accepts_dtmf_input: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptsDtmfInput' }})
    
