from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1GcsFolderDestination:
    r"""GoogleCloudDatalabelingV1beta1GcsFolderDestination
    Export folder destination of the data.
    """
    
    output_folder_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputFolderUri') }})
    
