from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSource:
    r"""DataSource
    Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.
    """
    
    disable_modifications: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableModifications') }})
    disable_serving: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableServing') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    indexing_service_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexingServiceAccounts') }})
    items_visibility: Optional[List[GSuitePrincipal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsVisibility') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationIds') }})
    return_thumbnail_urls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnThumbnailUrls') }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortName') }})
    
