from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Result:
    r"""GooglePrivacyDlpV2Result
    All result fields mentioned below are updated while the job is processing.
    """
    
    hybrid_stats: Optional[GooglePrivacyDlpV2HybridInspectStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hybridStats') }})
    info_type_stats: Optional[List[GooglePrivacyDlpV2InfoTypeStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypeStats') }})
    processed_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processedBytes') }})
    total_estimated_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalEstimatedBytes') }})
    
