from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import validationca


@dataclass_json
@dataclass
class MtlsPolicy:
    client_validation_ca: Optional[List[validationca.ValidationCa]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientValidationCa' }})
    
