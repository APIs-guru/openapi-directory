from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleTypePostalAddress:
    address_lines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLines' }})
    administrative_area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'administrativeArea' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locality' }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    recipients: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipients' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    sorting_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortingCode' }})
    sublocality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sublocality' }})
    
