from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2bigquerytable

class GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum(str, Enum):
    SAMPLE_METHOD_UNSPECIFIED = "SAMPLE_METHOD_UNSPECIFIED"
    TOP = "TOP"
    RANDOM_START = "RANDOM_START"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2BigQueryOptions:
    excluded_fields: Optional[List[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedFields' }})
    identifying_fields: Optional[List[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifyingFields' }})
    included_fields: Optional[List[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedFields' }})
    rows_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowsLimit' }})
    rows_limit_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowsLimitPercent' }})
    sample_method: Optional[GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleMethod' }})
    table_reference: Optional[googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableReference' }})
    
