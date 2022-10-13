from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2transformationconfig
from . import googleprivacydlpv2transformationdetailsstorageconfig

class GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum(str, Enum):
    FILE_TYPE_UNSPECIFIED = "FILE_TYPE_UNSPECIFIED"
    BINARY_FILE = "BINARY_FILE"
    TEXT_FILE = "TEXT_FILE"
    IMAGE = "IMAGE"
    WORD = "WORD"
    PDF = "PDF"
    AVRO = "AVRO"
    CSV = "CSV"
    TSV = "TSV"
    POWERPOINT = "POWERPOINT"
    EXCEL = "EXCEL"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Deidentify:
    cloud_storage_output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudStorageOutput' }})
    file_types_to_transform: Optional[List[GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileTypesToTransform' }})
    transformation_config: Optional[googleprivacydlpv2transformationconfig.GooglePrivacyDlpV2TransformationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformationConfig' }})
    transformation_details_storage_config: Optional[googleprivacydlpv2transformationdetailsstorageconfig.GooglePrivacyDlpV2TransformationDetailsStorageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformationDetailsStorageConfig' }})
    
