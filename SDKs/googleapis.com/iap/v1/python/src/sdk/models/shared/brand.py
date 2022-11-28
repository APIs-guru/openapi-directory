from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Brand:
    r"""Brand
    OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
    """
    
    application_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationTitle') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_internal_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgInternalOnly') }})
    support_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportEmail') }})
    

@dataclass_json
@dataclass
class BrandInput:
    r"""BrandInput
    OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
    """
    
    application_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationTitle') }})
    support_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportEmail') }})
    
