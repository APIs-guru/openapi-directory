from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue
from . import dimensionvalue
from . import sitecontact
from . import sitesettings
from . import sitevideosettings


@dataclass_json
@dataclass
class Site:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    approved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approved' }})
    directory_site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directorySiteId' }})
    directory_site_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directorySiteIdDimensionValue' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idDimensionValue' }})
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyName' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    site_contacts: Optional[List[sitecontact.SiteContact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteContacts' }})
    site_settings: Optional[sitesettings.SiteSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteSettings' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    video_settings: Optional[sitevideosettings.SiteVideoSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoSettings' }})
    
