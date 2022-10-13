from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstlastnamephonecodedout


@dataclass_json
@dataclass
class BatchFirstLastNamePhoneCodedOut:
    personal_names_with_phone_numbers: Optional[List[firstlastnamephonecodedout.FirstLastNamePhoneCodedOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNamesWithPhoneNumbers' }})
    
