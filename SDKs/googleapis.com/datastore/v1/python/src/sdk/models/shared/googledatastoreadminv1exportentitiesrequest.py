from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleDatastoreAdminV1ExportEntitiesRequest:
    r"""GoogleDatastoreAdminV1ExportEntitiesRequest
    The request for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.
    """
    
    entity_filter: Optional[GoogleDatastoreAdminV1EntityFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityFilter') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    output_url_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputUrlPrefix') }})
    
