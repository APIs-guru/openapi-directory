from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3propertymetadata

class GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum(str, Enum):
    OCCURRENCE_TYPE_UNSPECIFIED = "OCCURRENCE_TYPE_UNSPECIFIED"
    OPTIONAL_ONCE = "OPTIONAL_ONCE"
    OPTIONAL_MULTIPLE = "OPTIONAL_MULTIPLE"
    REQUIRED_ONCE = "REQUIRED_ONCE"
    REQUIRED_MULTIPLE = "REQUIRED_MULTIPLE"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    occurrence_type: Optional[GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurrenceType' }})
    property_metadata: Optional[googleclouddocumentaiv1beta3propertymetadata.GoogleCloudDocumentaiV1beta3PropertyMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyMetadata' }})
    value_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueType' }})
    
