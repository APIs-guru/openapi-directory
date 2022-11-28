from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Database:
    r"""Database
    Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of CloudSQL instances or Cloud Spanner instances), or the database instance itself. Some database resources may not have the full resource name populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. CloudSQL databases). In these cases only the display name will be provided.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    grantees: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantees') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    
