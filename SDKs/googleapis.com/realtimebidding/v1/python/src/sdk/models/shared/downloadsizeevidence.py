from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DownloadSizeEvidence:
    r"""DownloadSizeEvidence
    Total download size and URL-level download size breakdown for resources in a creative.
    """
    
    top_url_download_size_breakdowns: Optional[List[URLDownloadSize]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topUrlDownloadSizeBreakdowns') }})
    total_download_size_kb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDownloadSizeKb') }})
    
