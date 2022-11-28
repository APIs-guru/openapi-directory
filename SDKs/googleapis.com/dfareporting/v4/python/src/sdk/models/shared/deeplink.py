from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeepLink:
    r"""DeepLink
    Contains information about a landing page deep link.
    """
    
    app_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appUrl') }})
    fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallbackUrl') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    mobile_app: Optional[MobileApp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileApp') }})
    remarketing_list_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remarketingListIds') }})
    
