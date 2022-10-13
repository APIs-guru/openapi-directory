from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1tagfield


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1Tag:
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column' }})
    fields: Optional[dict[str, googleclouddatacatalogv1tagfield.GoogleCloudDatacatalogV1TagField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    template_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateDisplayName' }})
    
