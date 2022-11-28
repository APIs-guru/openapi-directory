from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2AuxiliaryTable:
    r"""GooglePrivacyDlpV2AuxiliaryTable
    An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
    """
    
    quasi_ids: Optional[List[GooglePrivacyDlpV2QuasiIDField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quasiIds') }})
    relative_frequency: Optional[GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeFrequency') }})
    table: Optional[GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    
