from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3entitytypemetadata
from . import googleclouddocumentaiv1beta3documentschemaentitytypeenumvalues
from . import googleclouddocumentaiv1beta3documentschemaentitytypeproperty


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType:
    base_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseTypes' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entity_type_metadata: Optional[googleclouddocumentaiv1beta3entitytypemetadata.GoogleCloudDocumentaiV1beta3EntityTypeMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityTypeMetadata' }})
    enum_values: Optional[googleclouddocumentaiv1beta3documentschemaentitytypeenumvalues.GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumValues' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties: Optional[List[googleclouddocumentaiv1beta3documentschemaentitytypeproperty.GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
