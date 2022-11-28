from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2BigQueryKey:
    r"""GooglePrivacyDlpV2BigQueryKey
    Row key for identifying a record in BigQuery table.
    """
    
    row_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowNumber') }})
    table_reference: Optional[GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableReference') }})
    
