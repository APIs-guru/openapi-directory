from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Site:
    r"""Site
    Contains properties of a site.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    approved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved') }})
    directory_site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directorySiteId') }})
    directory_site_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directorySiteIdDimensionValue') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyName') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site_contacts: Optional[List[SiteContact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteContacts') }})
    site_settings: Optional[SiteSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSettings') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    video_settings: Optional[SiteVideoSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoSettings') }})
    
