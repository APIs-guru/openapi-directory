from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import servicebusinesscontext


@dataclass_json
@dataclass
class FetchVerificationOptionsRequest:
    context: Optional[servicebusinesscontext.ServiceBusinessContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    
