from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleDatastoreAdminV1beta1ImportEntitiesRequest:
    r"""GoogleDatastoreAdminV1beta1ImportEntitiesRequest
    The request for google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities.
    """
    
    entity_filter: Optional[GoogleDatastoreAdminV1beta1EntityFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityFilter') }})
    input_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputUrl') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
