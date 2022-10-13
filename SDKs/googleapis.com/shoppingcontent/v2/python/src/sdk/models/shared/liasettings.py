from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import liacountrysettings


@dataclass_json
@dataclass
class LiaSettings:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    country_settings: Optional[List[liacountrysettings.LiaCountrySettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countrySettings' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
