from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstlastnamephonenumbergeoin


@dataclass_json
@dataclass
class BatchFirstLastNamePhoneNumberGeoIn:
    personal_names_with_phone_numbers: Optional[List[firstlastnamephonenumbergeoin.FirstLastNamePhoneNumberGeoIn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNamesWithPhoneNumbers' }})
    
