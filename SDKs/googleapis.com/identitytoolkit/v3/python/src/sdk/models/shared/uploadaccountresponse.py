from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UploadAccountResponseError:
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class UploadAccountResponse:
    r"""UploadAccountResponse
    Respone of uploading accounts in batch.
    """
    
    error: Optional[List[UploadAccountResponseError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
