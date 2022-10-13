from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1entitytypemetadata
from . import googleclouddocumentaiv1documentschemaentitytypeenumvalues
from . import googleclouddocumentaiv1documentschemaentitytypeproperty


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentSchemaEntityType:
    base_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseTypes' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entity_type_metadata: Optional[googleclouddocumentaiv1entitytypemetadata.GoogleCloudDocumentaiV1EntityTypeMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityTypeMetadata' }})
    enum_values: Optional[googleclouddocumentaiv1documentschemaentitytypeenumvalues.GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumValues' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties: Optional[List[googleclouddocumentaiv1documentschemaentitytypeproperty.GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
