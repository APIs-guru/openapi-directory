from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HlrReponse:
    etat: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etat') }})
    
