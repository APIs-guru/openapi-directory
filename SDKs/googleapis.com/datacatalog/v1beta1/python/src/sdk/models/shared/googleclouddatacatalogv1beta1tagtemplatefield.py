from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1fieldtype


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1TagTemplateField:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    is_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isRequired' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    type: Optional[googleclouddatacatalogv1beta1fieldtype.GoogleCloudDatacatalogV1beta1FieldType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
