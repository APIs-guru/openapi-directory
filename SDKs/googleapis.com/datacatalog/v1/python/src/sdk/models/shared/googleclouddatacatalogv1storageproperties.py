from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1StorageProperties:
    r"""GoogleCloudDatacatalogV1StorageProperties
    Details the properties of the underlying storage.
    """
    
    file_pattern: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePattern') }})
    file_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    
