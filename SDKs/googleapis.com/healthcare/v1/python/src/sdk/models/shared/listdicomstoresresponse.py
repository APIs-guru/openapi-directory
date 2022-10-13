from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dicomstore


@dataclass_json
@dataclass
class ListDicomStoresResponse:
    dicom_stores: Optional[List[dicomstore.DicomStore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dicomStores' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
