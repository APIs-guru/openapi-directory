from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import postaladdress


@dataclass_json
@dataclass
class Location:
    address: Optional[postaladdress.PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primary_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryCategoryId' }})
    primary_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryPhone' }})
    website_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteUri' }})
    
