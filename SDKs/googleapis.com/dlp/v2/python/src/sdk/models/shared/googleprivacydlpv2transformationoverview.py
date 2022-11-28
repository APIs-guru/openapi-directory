from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TransformationOverview:
    r"""GooglePrivacyDlpV2TransformationOverview
    Overview of the modifications that occurred.
    """
    
    transformation_summaries: Optional[List[GooglePrivacyDlpV2TransformationSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformationSummaries') }})
    transformed_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformedBytes') }})
    
