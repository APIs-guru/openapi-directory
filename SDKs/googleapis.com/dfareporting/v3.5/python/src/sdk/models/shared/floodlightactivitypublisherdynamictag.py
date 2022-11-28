from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FloodlightActivityPublisherDynamicTag:
    r"""FloodlightActivityPublisherDynamicTag
    Publisher Dynamic Tag
    """
    
    click_through: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThrough') }})
    directory_site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directorySiteId') }})
    dynamic_tag: Optional[FloodlightActivityDynamicTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicTag') }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteId') }})
    site_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteIdDimensionValue') }})
    view_through: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewThrough') }})
    
