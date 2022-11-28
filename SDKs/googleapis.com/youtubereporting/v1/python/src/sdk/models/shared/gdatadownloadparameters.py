from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GdataDownloadParameters:
    r"""GdataDownloadParameters
    gdata
    """
    
    allow_gzip_compression: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowGzipCompression') }})
    ignore_range: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreRange') }})
    
