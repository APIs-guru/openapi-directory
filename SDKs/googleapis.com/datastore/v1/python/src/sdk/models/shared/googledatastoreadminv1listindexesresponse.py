from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleDatastoreAdminV1ListIndexesResponse:
    r"""GoogleDatastoreAdminV1ListIndexesResponse
    The response for google.datastore.admin.v1.DatastoreAdmin.ListIndexes.
    """
    
    indexes: Optional[List[GoogleDatastoreAdminV1Index]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexes') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
