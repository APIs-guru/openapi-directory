from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documentschemaentitytype
from . import googleclouddocumentaiv1documentschemametadata


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentSchema:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entity_types: Optional[List[googleclouddocumentaiv1documentschemaentitytype.GoogleCloudDocumentaiV1DocumentSchemaEntityType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityTypes' }})
    metadata: Optional[googleclouddocumentaiv1documentschemametadata.GoogleCloudDocumentaiV1DocumentSchemaMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
