from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FhirStoreComplexDataTypeReferenceParsingEnum(str, Enum):
    COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED = "COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"

class FhirStoreVersionEnum(str, Enum):
    VERSION_UNSPECIFIED = "VERSION_UNSPECIFIED"
    DSTU2 = "DSTU2"
    STU3 = "STU3"
    R4 = "R4"


@dataclass_json
@dataclass
class FhirStore:
    r"""FhirStore
    Represents a FHIR store.
    """
    
    complex_data_type_reference_parsing: Optional[FhirStoreComplexDataTypeReferenceParsingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complexDataTypeReferenceParsing') }})
    default_search_handling_strict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSearchHandlingStrict') }})
    disable_referential_integrity: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableReferentialIntegrity') }})
    disable_resource_versioning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableResourceVersioning') }})
    enable_update_create: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableUpdateCreate') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_config: Optional[NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfig') }})
    stream_configs: Optional[List[StreamConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamConfigs') }})
    validation_config: Optional[ValidationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationConfig') }})
    version: Optional[FhirStoreVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
