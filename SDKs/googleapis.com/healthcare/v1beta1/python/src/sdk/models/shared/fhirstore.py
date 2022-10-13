from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import notificationconfig
from . import fhirnotificationconfig
from . import searchconfig
from . import streamconfig
from . import validationconfig

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
    complex_data_type_reference_parsing: Optional[FhirStoreComplexDataTypeReferenceParsingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complexDataTypeReferenceParsing' }})
    default_search_handling_strict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultSearchHandlingStrict' }})
    disable_referential_integrity: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableReferentialIntegrity' }})
    disable_resource_versioning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableResourceVersioning' }})
    enable_update_create: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableUpdateCreate' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_config: Optional[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    notification_configs: Optional[List[fhirnotificationconfig.FhirNotificationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfigs' }})
    search_config: Optional[searchconfig.SearchConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchConfig' }})
    stream_configs: Optional[List[streamconfig.StreamConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamConfigs' }})
    validation_config: Optional[validationconfig.ValidationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationConfig' }})
    version: Optional[FhirStoreVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
