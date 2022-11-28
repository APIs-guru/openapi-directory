from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class URLDownloadSize:
    r"""URLDownloadSize
    The URL-level breakdown for the download size.
    """
    
    download_size_kb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadSizeKb') }})
    normalized_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedUrl') }})
    
