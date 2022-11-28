from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Category:
    r"""Category
    Represents the category hierarchy of a SKU.
    """
    
    resource_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceFamily') }})
    resource_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroup') }})
    service_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDisplayName') }})
    usage_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageType') }})
    
