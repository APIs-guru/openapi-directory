from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1tagtemplatefield


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1TagTemplate:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    fields: Optional[dict[str, googleclouddatacatalogv1tagtemplatefield.GoogleCloudDatacatalogV1TagTemplateField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    is_publicly_readable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPubliclyReadable' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
