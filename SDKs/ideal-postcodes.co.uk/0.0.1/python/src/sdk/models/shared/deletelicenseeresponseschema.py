from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deletelicenseeresult


@dataclass_json
@dataclass
class DeleteLicenseeResponseSchema:
    result: Optional[deletelicenseeresult.DeleteLicenseeResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
