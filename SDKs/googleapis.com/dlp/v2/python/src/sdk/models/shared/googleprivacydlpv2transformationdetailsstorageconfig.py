from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TransformationDetailsStorageConfig:
    r"""GooglePrivacyDlpV2TransformationDetailsStorageConfig
    Config for storing transformation details.
    """
    
    table: Optional[GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    
