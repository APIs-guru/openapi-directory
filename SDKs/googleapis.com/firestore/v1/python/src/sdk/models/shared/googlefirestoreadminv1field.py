from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1Field:
    r"""GoogleFirestoreAdminV1Field
    Represents a single field in the database. Fields are grouped by their \"Collection Group\", which represent all collections in the database with the same id.
    """
    
    index_config: Optional[GoogleFirestoreAdminV1IndexConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ttl_config: Optional[GoogleFirestoreAdminV1TTLConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttlConfig') }})
    
