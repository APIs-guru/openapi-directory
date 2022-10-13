from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import verificationoption


@dataclass_json
@dataclass
class FetchVerificationOptionsResponse:
    options: Optional[List[verificationoption.VerificationOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    
