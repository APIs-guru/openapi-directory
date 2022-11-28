from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GdataBlobstore2Info:
    r"""GdataBlobstore2Info
    gdata
    """
    
    blob_generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobGeneration') }})
    blob_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobId') }})
    download_read_handle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadReadHandle') }})
    read_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readToken') }})
    upload_metadata_container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadMetadataContainer') }})
    
