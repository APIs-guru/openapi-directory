from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DataplexSpec:
    r"""GoogleCloudDatacatalogV1DataplexSpec
    Common Dataplex fields.
    """
    
    asset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    compression_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compressionFormat') }})
    data_format: Optional[GoogleCloudDatacatalogV1PhysicalSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFormat') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    
