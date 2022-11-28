from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KAnonymityEquivalenceClass:
    r"""GooglePrivacyDlpV2KAnonymityEquivalenceClass
    The set of columns' values that share the same ldiversity value
    """
    
    equivalence_class_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equivalenceClassSize') }})
    quasi_ids_values: Optional[List[GooglePrivacyDlpV2Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quasiIdsValues') }})
    
