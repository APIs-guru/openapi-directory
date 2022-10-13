from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributes
from . import destinationstatus
from . import issue


@dataclass_json
@dataclass
class Product:
    attributes: Optional[attributes.Attributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    content_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentLanguage' }})
    destination_statuses: Optional[List[destinationstatus.DestinationStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationStatuses' }})
    issues: Optional[List[issue.Issue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    target_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCountry' }})
    
