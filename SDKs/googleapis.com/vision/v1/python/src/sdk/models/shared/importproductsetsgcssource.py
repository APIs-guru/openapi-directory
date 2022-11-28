from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportProductSetsGcsSource:
    r"""ImportProductSetsGcsSource
    The Google Cloud Storage location for a csv file which preserves a list of ImportProductSetRequests in each line.
    """
    
    csv_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csvFileUri') }})
    
