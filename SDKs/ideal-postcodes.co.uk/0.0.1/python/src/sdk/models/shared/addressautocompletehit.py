from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import addressautocompletehiturls


@dataclass_json
@dataclass
class AddressAutocompleteHit:
    suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestion' }})
    udprn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'udprn' }})
    umprn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'umprn' }})
    urls: Optional[addressautocompletehiturls.AddressAutocompleteHitUrls] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urls' }})
    
