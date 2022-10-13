from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstlastnamephonenumberin


@dataclass_json
@dataclass
class BatchFirstLastNamePhoneNumberIn:
    personal_names_with_phone_numbers: Optional[List[firstlastnamephonenumberin.FirstLastNamePhoneNumberIn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNamesWithPhoneNumbers' }})
    
