from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import transferparameters


@dataclass_json
@dataclass
class RetrieveTransferParametersResponse:
    transfer_parameters: Optional[transferparameters.TransferParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferParameters' }})
    
