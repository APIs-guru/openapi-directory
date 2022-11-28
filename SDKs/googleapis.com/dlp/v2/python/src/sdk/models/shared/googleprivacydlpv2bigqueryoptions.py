from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum(str, Enum):
    SAMPLE_METHOD_UNSPECIFIED = "SAMPLE_METHOD_UNSPECIFIED"
    TOP = "TOP"
    RANDOM_START = "RANDOM_START"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2BigQueryOptions:
    r"""GooglePrivacyDlpV2BigQueryOptions
    Options defining BigQuery table and row identifiers.
    """
    
    excluded_fields: Optional[List[GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedFields') }})
    identifying_fields: Optional[List[GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifyingFields') }})
    included_fields: Optional[List[GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedFields') }})
    rows_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowsLimit') }})
    rows_limit_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowsLimitPercent') }})
    sample_method: Optional[GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleMethod') }})
    table_reference: Optional[GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableReference') }})
    
