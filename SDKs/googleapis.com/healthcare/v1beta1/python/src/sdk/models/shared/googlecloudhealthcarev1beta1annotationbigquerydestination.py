from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum(str, Enum):
    SCHEMA_TYPE_UNSPECIFIED = "SCHEMA_TYPE_UNSPECIFIED"
    SIMPLE = "SIMPLE"

class GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum(str, Enum):
    WRITE_DISPOSITION_UNSPECIFIED = "WRITE_DISPOSITION_UNSPECIFIED"
    WRITE_EMPTY = "WRITE_EMPTY"
    WRITE_TRUNCATE = "WRITE_TRUNCATE"
    WRITE_APPEND = "WRITE_APPEND"


@dataclass_json
@dataclass
class GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination:
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    schema_type: Optional[GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaType' }})
    table_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableUri' }})
    write_disposition: Optional[GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeDisposition' }})
    
