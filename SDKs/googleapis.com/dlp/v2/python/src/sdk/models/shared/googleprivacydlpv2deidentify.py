from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GooglePrivacyDlpV2Deidentify
    Create a de-identified copy of the requested table or files. A TransformationDetail will be created for each transformation. If any rows in BigQuery are skipped during de-identification (transformation errors or row size exceeds BigQuery insert API limits) they are placed in the failure output table. If the original row exceeds the BigQuery insert API limit it will be truncated when written to the failure output table. The failure output table can be set in the action.deidentify.output.big_query_output.deidentified_failure_output_table field, if no table is set, a table will be automatically created in the same project and dataset as the original table. Compatible with: Inspect
    """
    
    cloud_storage_output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudStorageOutput') }})
    file_types_to_transform: Optional[List[GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileTypesToTransform') }})
    transformation_config: Optional[GooglePrivacyDlpV2TransformationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformationConfig') }})
    transformation_details_storage_config: Optional[GooglePrivacyDlpV2TransformationDetailsStorageConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformationDetailsStorageConfig') }})
    
