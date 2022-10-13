from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1tagtemplatefield


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1TagTemplate:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    fields: Optional[dict[str, googleclouddatacatalogv1beta1tagtemplatefield.GoogleCloudDatacatalogV1beta1TagTemplateField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
