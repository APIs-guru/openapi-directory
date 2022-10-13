from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3documentschemaentitytype
from . import googleclouddocumentaiv1beta3documentschemametadata


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentSchema:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entity_types: Optional[List[googleclouddocumentaiv1beta3documentschemaentitytype.GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityTypes' }})
    metadata: Optional[googleclouddocumentaiv1beta3documentschemametadata.GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
