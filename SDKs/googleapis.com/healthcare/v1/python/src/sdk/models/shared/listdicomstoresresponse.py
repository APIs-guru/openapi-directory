from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDicomStoresResponse:
    r"""ListDicomStoresResponse
    Lists the DICOM stores in the given dataset.
    """
    
    dicom_stores: Optional[List[DicomStore]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dicomStores') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
