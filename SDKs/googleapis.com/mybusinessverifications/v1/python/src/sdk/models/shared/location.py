from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Location:
    r"""Location
    A subset of location info. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
    """
    
    address: Optional[PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primary_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryCategoryId') }})
    primary_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPhone') }})
    website_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUri') }})
    
